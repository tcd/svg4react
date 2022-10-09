import type { PolygonProps } from "./Polygon.types"
import processPolygonProps from "./process-polygon-props"

/**
 * A wrapper for the [`<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon) element.
 *
 * The `<polygon>` element defines a closed shape consisting of a set of connected straight line segments.
 * The last point is connected to the first point.
 *
 * For open shapes, see the [`<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline) element.
 */
const Polygon = (props: PolygonProps): JSX.Element => {

    const processedProps = processPolygonProps(props)

    return (
        // @ts-ignore: next-line
        <polygon
            {...processedProps}
        />
    )
}

export default Polygon
