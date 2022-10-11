import type { CommonSVGPresentationAttributes, IRI, ISVGProps, Length } from "../utils"

/**
 * @see [MDN Web Docs - `<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)
 */
export type UseAttributes = {
    /**
     * Shorthand for `x` and `y`.
     *
     * If only one value is provided, it will be passed to both `x` and `y`.
     *
     * **Will** override `x` and `y`.
     *
     * @shorthand x
     * @shorthand y
     */
    coords?: [x: number, y?: number]
    /**
     * Shorthand for `width` and `height`.
     *
     * If only one value is provided, it will be passed to both `width` and `height`.
     *
     * **Will** override `width` and `height`.
     *
     * @shorthand width
     * @shorthand height
     */
    size?: [width: number, height?: number]
    // /**
    //  * `id` of the element to *use*. No preceding hash required.
    //  */
    // useId?: string
    /**
     * The URL to an element/fragment that needs to be duplicated.
     */
    href?: IRI
    /**
     * The x coordinate of the use element.
     *
     * @default 0
     */
    x?: Length
    /**
     * The y coordinate of the use element.
     *
     * @default 0
     */
    y?: Length
    /**
     * The width of the use element.
     *
     * @default 0
     */
    width?: Length
    /**
     * The height of the use element.
     *
     * @default 0
     */
    height?: Length
}

/**
 * @see [MDN Web Docs - `<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)
 */
export type UseProps =
    ISVGProps<SVGUseElement>
    & UseAttributes
    & CommonSVGPresentationAttributes
