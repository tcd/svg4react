import type { SVGProps } from "react"
import type { CommonSVGPresentationAttributes } from "../utils"

export type PolylineCoordinate = [
    x: number,
    y: number,
]

/**
 * @public
 *
 * @see [MDN Web Docs - `<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline)
 */
export type _PolylineAttributes = {
    /**
     * The list of points (pairs of x,y absolute coordinates) required to draw the polyline.
     *
     * @shorthand `React.SVGProps<SVGPolylineElement>["points"]`
     */
    points: PolylineCoordinate[]
    /**
     * Defines the total path length in user units.
     */
    pathLength?: number
}

/**
 * @public
 *
 * @see [MDN Web Docs - `<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline)
 */
export type PolylineAttributes = _PolylineAttributes & CommonSVGPresentationAttributes

/**
 * @public
 *
 * @see [MDN Web Docs - `<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline)
 */
export type PolylineProps =
    Omit<SVGProps<SVGPolylineElement>, keyof PolylineAttributes>
    & PolylineAttributes
