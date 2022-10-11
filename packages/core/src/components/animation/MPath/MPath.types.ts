import type { ISVGProps, IRI } from "../../../../src copy/utils"

/**
 * @see [MDN Web Docs - `<mpath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath)
 */
export type MPathAttributes = {
    /**
     * IRI of the target path.
     */
    href: IRI
}

/**
 * @see [MDN Web Docs - `<mpath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath)
 */
export type MPathProps =
    ISVGProps<SVGCircleElement>
    & MPathAttributes
