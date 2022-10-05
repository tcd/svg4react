import type { SVGProps } from "react"
import type { CommonSvgPresentationAttributes } from "../utils"

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
export type PolygonAttributes = _PolygonAttributes & CommonSvgPresentationAttributes

/**
 * @public
 *
 * @see [MDN Web Docs - `<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon)
 */
export type PolygonProps =
    Omit<SVGProps<SVGPolygonElement>, keyof PolygonAttributes>
    & PolygonAttributes
