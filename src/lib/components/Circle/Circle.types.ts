import type { SVGProps } from "react"
import type { SvgPresentationAttributes } from "../utils"

/**
 * @public
 *
 * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
 */
export type CircleAttributes = {
    /**
     * The x-axis coordinate of the center of the circle.
     */
    cx: number | string
    /**
     * The y-axis coordinate of the center of the circle.
     */
    cy: number | string
    /**
     * The radius of the circle.
     *
     * A value lower or equal to zero disables rendering of the circle.
     */
    r: number | string
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

/**
 * @public
 */
export type CircleProps =
    Omit<SVGProps<SVGCircleElement>, keyof CircleAttributes>
    & CircleAttributes
