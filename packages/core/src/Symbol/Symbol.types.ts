import type {
    ISVGProps,
    CommonSVGAttributes,
    PreserveAspectRatio,
    Length,
} from "../utils"

/**
 * @see [MDN Web Docs - `<symbol>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol)
 */
export type SymbolAttributes = {
    /**
     * Shorthand for the setting the last two values of `viewBox`
     *
     * If only one value is passed, it will be assigned to both `width` and `height`.
     *
     * `minX` and `minY` are set to 0, resulting in `"0 0 {width} {height}"`.
     *
     * Will **not** override `viewBox` if both are passed.
     *
     * @shorthand viewBox
     */
    vb?: [width: number, height?: number]
    /**
     * Shorthand for `refX` and `refY`.
     *
     * If only one value is provided, it will be passed to both `refX` and `refY`.
     *
     * **Will** override `refX` and `refY`.
     *
     * @shorthand refX
     * @shorthand refY
     */
    refXY?: [refX: number, refY?: number]
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
    size?: [width: Length, height?: Length]
    /**
     * Defines how the svg fragment must be deformed if it is embedded in a container with a different aspect ratio.
     *
     * @default "xMidYMid meet"
     */
    preserveAspectRatio?: PreserveAspectRatio
}

/**
 * @see [MDN Web Docs - `<symbol>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol)
 */
export type SymbolProps =
    ISVGProps<SVGSymbolElement>
    & SymbolAttributes
    & CommonSVGAttributes
