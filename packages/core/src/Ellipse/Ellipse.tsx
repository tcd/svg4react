import { forwardRef } from "react"
import type { EllipseProps } from "./Ellipse.types"

/**
 * A wrapper for the [`<ellipse>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse) element.
 *
 * The `<ellipse>` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
 *
 * **Note**: Ellipses are unable to specify the exact orientation of the ellipse (if, for example, you wanted to draw an ellipse tilted at a 45 degree angle), but they can be rotated by using the `transform` attribute.
 */
const Ellipse = forwardRef<SVGEllipseElement, EllipseProps>(function Ellipse(props: EllipseProps, ref) {

    const {
        coordinates = [],
        radius = [],
        ...otherProps
    } = props

    if (coordinates.length == 2) {
        otherProps.cx = coordinates[0]
        otherProps.cy = coordinates[1]
    }

    if (radius.length == 2) {
        otherProps.rx = radius[0]
        otherProps.ry = radius[1]
    }

    return (
        // @ts-ignore: next-line
        <ellipse
            ref={ref}
            {...otherProps}
        />
    )
})

export default Ellipse
