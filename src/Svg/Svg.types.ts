import { SVGProps } from "react"
import type { SvgPresentationAttributes } from "../utils"

type SvgAttributes = {
    /**
     * Shorthand for the setting the last two values of `viewBox`
     *
     * If only one value is passed, it will be assigned to both `width` and `height`
     *
     * `minX` and `minY` are set to 0, resulting in `"0 0 width height"`.
     *
     * Will **not** override `viewBox` if both are passed.
     */
    vb?: [width: number, height?: number]
    /**
     * Shorthand for setting both `width` and `height`.
     */
    size?: string
    /**
     * The SVG viewport coordinates for the current SVG fragment.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
     */
    viewBox?: string
    /**
     * How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.
     *
     * @default "xMidYMid meet"
     */
    preserveAspectRatio?: "none" | `${"xMidYMin"|"xMinYMin"|"xMaxYMin"|"xMinYMid"|"xMidYMid"|"xMaxYMid"|"xMinYMax"|"xMidYMax"|"xMaxYMax"} ${"meet"|"slice"}`
} & Pick<SvgPresentationAttributes,
    | "clipPath"
    | "clipRule"
    | "color"
    | "colorInterpolation"
    | "cursor"
    | "display"
    | "fill"
    | "fillOpacity"
    | "fillRule"
    | "filter"
    | "mask"
    | "opacity"
    | "pointerEvents"
    | "shapeRendering"
    | "stroke"
    | "strokeDasharray"
    | "strokeDashoffset"
    | "strokeLinecap"
    | "strokeLinejoin"
    | "strokeMiterlimit"
    | "strokeOpacity"
    | "strokeWidth"
    | "transform"
    | "vectorEffect"
    | "visibility"
>

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
