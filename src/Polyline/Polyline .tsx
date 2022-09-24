import { forwardRef } from "react"
import { processPoints } from "./process-points"
import type { PolylineProps } from "./Polyline.types"

/**
 * @public
 *
 * A wrapper for the [`<polyline>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline) element.
 *
 * The `<polyline>` SVG element is a [basic shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) that creates straight lines connecting several points.
 *
 * Typically a `polyline` is used to create open shapes as the last point doesn't have to be connected to the first point.
 *
 * For closed shapes see the [`<polygon>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon) element.
 */
const Polyline  = forwardRef<SVGPolylineElement, PolylineProps>(function Polyline(props: PolylineProps, ref) {

    const {
        points = [],
        ...otherProps
    } = props

    const processedPoints = processPoints(points)

    return (
        // @ts-ignore: next-line
        <polyline
            ref={ref}
            points={processedPoints}
            {...otherProps}
        />
    )
})

export default Polyline
