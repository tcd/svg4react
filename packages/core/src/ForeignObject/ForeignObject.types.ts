import type { ISVGProps, CommonSVGAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<foreignObject>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject)
 */
export type ForeignObjectAttributes = {
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
}

/**
 * @see [MDN Web Docs - `<foreignObject>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject)
 */
export type ForeignObjectProps =
    ISVGProps<SVGSymbolElement>
    & ForeignObjectAttributes
    & CommonSVGAttributes
