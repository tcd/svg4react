import type { ISVGProps, CommonSVGAttributes, SVGTextAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<tspan>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan)
 */
export type TSpanAttributes = {
    /**
     * Add a hidden space character to the end of the component.
     *
     * This is useful for fixing spacing errors when copying text.
     *
     * @default false
     */
    addSpace?: boolean
    /**
     * Pass a string value instead of children.
     *
     * @shorthand children
     */
    value?: string
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
    // FIXME: Length. Allow percentage.
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
     */
    rotate?: string
}

/**
 * @see [MDN Web Docs - `<tspan>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan)
 */
export type TSpanProps =
    ISVGProps<SVGTSpanElement>
    & TSpanAttributes
    & SVGTextAttributes
    & CommonSVGAttributes
