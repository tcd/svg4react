import type { CommonSVGPresentationAttributes, ISVGProps, Length } from "../utils"

/**
 * @see [MDN Web Docs - `<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)
 */
export type UseAttributes = {
    // /**
    //  * `id` of the element to *use*. No preceding hash required.
    //  */
    // useId?: string
    /**
     * The URL to an element/fragment that needs to be duplicated.
     */
    href?: string
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
