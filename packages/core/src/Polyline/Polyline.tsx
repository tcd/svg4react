import type { PolylineProps } from "./Polyline.types"
import processProps from "./process-points"

/**
 * A wrapper for the [`<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline) element.
 *
 * The `<polyline>` SVG element is a [basic shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) that creates straight lines connecting several points.
 *
 * Typically a `polyline` is used to create open shapes as the last point doesn't have to be connected to the first point.
 *
 * For closed shapes see the [`<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon) element.
 */
const Polyline = (props: PolylineProps): JSX.Element => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <polyline
            {...processedProps}
        />
    )
}

export default Polyline
