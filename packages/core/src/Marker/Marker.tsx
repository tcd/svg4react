import type { MarkerProps } from "./Marker.types"
import { processMarkerProps } from "./process-marker-props"

/**
 * A wrapper for the [`<marker>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker) element.
 *
 * The `<marker>` element defines the graphic that is to be used for drawing arrowheads or polymarkers on any of the following:
 *
 * - `<path>`
 * - `<line>`
 * - `<polyline>`
 * - `<polygon>`
 *
 * Markers are attached to shapes using the `marker-start`, `marker-mid`, and `marker-end` properties.
 */
const Marker = (props: MarkerProps) => {

    const processedProps = processMarkerProps(props)

    return (
        // @ts-ignore: next-line
        <circle
            {...processedProps}
        />
    )
}

export default Marker
