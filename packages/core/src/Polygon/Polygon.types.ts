import type { SVGProps } from "react"
import type { SvgPresentationAttributes } from "../utils"

export type PolygonCoordinate = [
    x: number,
    y: number,
]

/**
 * @public
 *
 * @see [MDN Web Docs - `<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon)
 */
export type _PolygonAttributes = {
    /**
     * The list of points (pairs of x,y absolute coordinates) required to draw the polygon.
     *
     * @default []
     */
    points: PolygonCoordinate[]
    /**
     * Defines the total path length in user units.
     *
     * @default "none"
     */
    pathLength?: number
}

/**
 * @public
 *
 * @see [MDN Web Docs - `<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon)
 */
export type PolygonAttributes = _PolygonAttributes & Pick<SvgPresentationAttributes,
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
 * @see [MDN Web Docs - `<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon)
 */
export type PolygonProps =
    Omit<SVGProps<SVGPolygonElement>, keyof PolygonAttributes>
    & PolygonAttributes
