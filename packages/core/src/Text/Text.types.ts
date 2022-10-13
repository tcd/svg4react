import type { Property } from "csstype"
import type { ISVGProps, SVGTextAttributes, CommonSVGAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<text>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)
 */
export type TextAttributes = {
    /**
     * Shorthand for the x and y coordinates of the starting point of the text baseline.
     *
     * If only one value is provided, it will be used for `x` and `y`.
     *
     * **Will** override `x` and `y`.
     *
     * @shorthand x
     * @shorthand y
     */
    coordinates?: [x: number | string, y?: number | string]
    /**
     * Shorthand for `dx` and `dy`.
     *
     * If only one value is provided, it will be used for `dx` and `dy`.
     *
     * **Will** override `dx` and `dy`.
     *
     * @shorthand dx
     * @shorthand dy
     */
    shift?: [dx: number, dy?: number]
    /**
     * The x coordinate of the starting point of the text baseline.
     *
     * @default 0
     */
    x?: number | string
    /**
     * The y coordinate of the starting point of the text baseline.
     *
     * @default 0
     */
    y?: number | string
    /**
     * Shifts the text position horizontally from a previous text element.
     */
    dx?: number | string
    /**
     * Shifts the text position vertically from a previous text element.
     */
    dy?: number | string
    /**
     * Rotates orientation of each individual glyph. Can rotate glyphs individually.
     *
     * @animatable true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text#attributes)
     */
    rotate?: string
    /**
     * Provides hints to the renderer about what tradeoffs to make when rendering text.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-rendering)
     */
    textRendering?: Property.TextRendering
}

/**
 * @see [MDN Web Docs - `<text>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)
 */
export type TextProps =
    ISVGProps<SVGTextElement>
    & TextAttributes
    & SVGTextAttributes
    & CommonSVGAttributes
