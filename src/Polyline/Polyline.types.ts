import type { SVGProps } from "react"
import type { SvgPresentationAttributes } from "../utils"

export type PolylineCoordinate = [
    x: number,
    y: number,
]

/**
 * @public
 *
 * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline)
 */
export type PolylineAttributes = {
    /**
     * The list of points (pairs of x,y absolute coordinates) required to draw the polyline.
     *
     * @default []
     */
    points: PolylineCoordinate[]
    /**
     * Defines the total path length in user units.
     *
     * @default "none"
     */
    pathLength: number
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
export type PolylineProps =
    Omit<SVGProps<SVGPolylineElement>, keyof PolylineAttributes>
    & PolylineAttributes
