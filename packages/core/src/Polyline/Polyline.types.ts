import type { ISVGProps, CommonSVGAttributes, MarkerAttachAttributes } from "../utils"

export type PolylineCoordinate = [
    x: number,
    y: number,
]

/**
 * @see [MDN Web Docs - `<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline)
 */
export type PolylineAttributes = {
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
 * @see [MDN Web Docs - `<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline)
 */
export type PolylineProps =
    ISVGProps<SVGPolylineElement>
    & PolylineAttributes
    & CommonSVGAttributes
    & MarkerAttachAttributes
