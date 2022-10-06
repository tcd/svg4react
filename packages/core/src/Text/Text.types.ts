import type { SVGProps } from "react"
import type { CommonSvgPresentationAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<text>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)
 */
export type _TextAttributes = {
    /**
     * Shorthand for the x and y coordinates of the starting point of the text baseline.
     *
     * **Will** override `x` and `y`.
     *
     * @shorthand x
     * @shorthand y
     */
    coordinates?: [x: number, y?: number]
    /**
     * Shorthand for `dx` and `dy`.
     *
     * **Will** override `dx` and `dy`.
     *
     * @shorthand dx
     * @shorthand dy
     */
    shift?: [dx: number, dy: number]
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
    /**
     * How the text is stretched or compressed to fit the width defined by the textLength attribute.
     *
     * @default "spacing"
     */
    lengthAdjust?: "spacing" | "spacingAndGlyphs"
    /**
     * A width that the text should be scaled to fit.
     */
    textLength?: number | string
}

/**
 * @see [MDN Web Docs - `<text>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)
 */
export type TextAttributes = _TextAttributes & CommonSvgPresentationAttributes

/**
 * @see [MDN Web Docs - `<text>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)
 */
export type TextProps =
    Omit<SVGProps<SVGTextElement>, keyof TextAttributes>
    & TextAttributes
