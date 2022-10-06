import type { SVGProps } from "react"
import type { CommonSvgPresentationAttributes } from "../utils"

/**
 * @see [MDN - `<svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg)
 */
export type _SvgAttributes = {
    /**
     * Shorthand for the setting the last two values of `viewBox`
     *
     * If only one value is passed, it will be assigned to both `width` and `height`.
     *
     * `minX` and `minY` are set to 0, resulting in `"0 0 width height"`.
     *
     * Will **not** override `viewBox` if both are passed.
     *
     * @shorthand viewBox
     */
    vb?: [width: number, height?: number]
    /**
     * Shorthand for setting both `width` and `height`.
     *
     * @shorthand width
     * @shorthand height
     */
    size?: string
    /**
     * The SVG viewport coordinates for the current SVG fragment.
     *
     * (alternative definition) The position and dimension for the content of the `<svg>` element.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)
     */
    viewBox?: string
    /**
     * How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio)
     *
     * @default "xMidYMid meet"
     */
    preserveAspectRatio?: "none" | `x${"Min"|"Mid"|"Max"}Y${"Min"|"Mid"|"Max"} ${"meet"|"slice"}`
}

/**
 * @see [MDN - `<svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg)
 */
export type SvgAttributes = _SvgAttributes & CommonSvgPresentationAttributes

type Deprecated =
    | "baseProfile"
    | "contentScriptType"
    | "contentStyleType"
    | "version"

/**
 * @see [MDN - `<svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg)
 */
export type SvgProps =
    Omit<SVGProps<SVGSVGElement>, keyof SvgAttributes | Deprecated | "xmlns" | "xmlnsXlink">
    & SvgAttributes
