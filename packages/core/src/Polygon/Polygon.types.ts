import type { ISVGProps, CommonSVGAttributes, MarkerAttachAttributes } from "../utils"

export type PolygonCoordinate = [
    x: number,
    y: number,
]

/**
 * @see [MDN Web Docs - `<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon)
 */
export type PolygonAttributes = {
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
 * @see [MDN Web Docs - `<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon)
 */
export type PolygonProps =
    ISVGProps<SVGPolygonElement>
    & PolygonAttributes
    & CommonSVGAttributes
    & MarkerAttachAttributes
