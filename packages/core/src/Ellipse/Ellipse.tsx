import { forwardRef } from "react"
import type { EllipseProps } from "./Ellipse.types"

/**
 * A wrapper for the [`<ellipse>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse) element.
 *
 * The `<ellipse>` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
 */
const Ellipse = forwardRef<SVGEllipseElement, EllipseProps>(function Ellipse(props: EllipseProps, ref) {

    const {
        coordinates = [],
        ...otherProps
    } = props

    if (coordinates.length == 2) {
        otherProps.cx = coordinates[0]
        otherProps.cy = coordinates[1]
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
