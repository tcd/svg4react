import { processPolygonPoints } from "./process-polygon-points"
import type { PolygonProps } from "./Polygon.types"

/**
 * @public
 *
 * A wrapper for the [`<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon) element.
 *
 * The `<polygon>` element defines a closed shape consisting of a set of connected straight line segments.
 * The last point is connected to the first point.
 *
 * For open shapes, see the [`<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline) element.
 */
const Polygon = (props: PolygonProps): JSX.Element => {

    const {
        points = [],
        ...otherProps
    } = props

    const processedPoints = processPolygonPoints(points)

    return (
        // @ts-ignore: next-line
        <polygon
            points={processedPoints}
            {...otherProps}
        />
    )
}

export default Polygon
