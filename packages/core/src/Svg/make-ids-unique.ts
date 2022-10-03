import { cloneElement } from "react"
import { deepMap } from "react-children-utilities"

/**
 * @private
 *
 * Probably not perfect, but it saves us a dependency.
 *
 * @see [StackOverflow - How do I create a GUID / UUID?](https://stackoverflow.com/a/2117523/7687024)
 */
const createUniqueId = (): string => {
    // @ts-ignore: next-line
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
}

/**
 * A modified version of the core code from [elderapo/react-svg-unique-id](https://github.com/elderapo/react-svg-unique-id).
 *
 * Modifications include:
 *
 * - Extract to class for use in functional components & other contexts.
 * - Remove `core-js` dependency.
 * - Use pseudo-guid instead of incrementing numbers.
 * - Use `href` instead of [deprecated `xlink:href`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href).
 * - TODO: update ids without urls.
 */
export class IdLocalizer {

    private svgId: string
    private rawChildren: React.ReactNode
    private uniqueIds = new Map<string, string>()

    constructor(svgId: string, children: React.ReactNode) {
        this.svgId = svgId
        this.rawChildren = children
    }

    private getUniqueId(originalId: string): string | null {
        if (typeof originalId === "undefined") { return null }

        if (!this.uniqueIds.has(originalId)) {
            this.uniqueIds.set(originalId, createUniqueId())
        }

        const uniqueId = this.uniqueIds.get(originalId)

        return `${this.svgId}--${originalId}--${uniqueId}`
    }

    private fixPropWithUrl(prop: string): string {
        if (typeof prop !== "string") { return prop }

        const [_, id] = prop.match(/^url\(#(.*)\)$/) || [null, null]
        if (id === null) { return prop }

        const uniqueId = this.getUniqueId(id)
        if (uniqueId === null) { return prop }

        return `url(#${uniqueId})`
    }

    private getUniqueHref(prop: string): string {
        if (typeof prop !== "string" || !prop.startsWith("#")) {
            return prop
        }

        const id = prop.replace("#", "")

        const uniqueId = this.getUniqueId(id)
        if (uniqueId === null) { return prop }

        return `#${uniqueId}`
    }

    private localizeChild(child: React.ReactNode) {
        if (
            !child
            || typeof child === "string"
            || typeof child === "number"
            // @ts-ignore: next-line
            || !("props" in child)
        ) {
            return child
        }

        const uniqueId = this.getUniqueId(child.props?.id)

        const newProps = {
            ...child.props,
        }

        Object.keys(newProps).map((key) => (
            newProps[key] = this.fixPropWithUrl(newProps[key])
        ))

        return cloneElement(child, {
            ...newProps,
            id: uniqueId,
            href: this.getUniqueHref(child.props?.href),
        })
    }

    public localize() {
        return deepMap(this.rawChildren, (child) => this.localizeChild(child))
    }
}
