import type { SVGProps } from "react"
import type { SvgPresentationAttributes } from "../utils"

/**
 * @public
 *
 * @see [MDN Web Docs - `<circle>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
 */
type CircleAttributes = {
    /**
     * The x and y axis coordinates of the center of the circle.
     *
     * Will override `cx` and `cy`.
     */
    coordinates?: [cx: number, cy: number]
    /**
     * The x-axis coordinate of the center of the circle.
     */
    cx?: number | string
    /**
     * The y-axis coordinate of the center of the circle.
     */
    cy?: number | string
    /**
     * The radius of the circle.
     *
     * A value lower or equal to zero disables rendering of the circle.
     */
    r: number | string
    /**
     * The total length for the circle's circumference, in user units.
     */
    pathLength?: number | string
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
 *
 * @see [MDN Web Docs - `<circle>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
 */
export type CircleProps =
    Omit<SVGProps<SVGCircleElement>, keyof CircleAttributes>
    & CircleAttributes
