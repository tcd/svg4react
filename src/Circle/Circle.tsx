import { forwardRef } from "react"
import type { CircleProps } from "./Circle.types"

/**
 * @public
 *
 * A wrapper for the [`<circle>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) element.
 *
 * The `<circle>` SVG element is an [SVG basic shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes),
 * used to draw circles based on a center point and a radius.
 */
const Circle = forwardRef<SVGCircleElement, CircleProps>(function Circle(props: CircleProps, ref) {

    const {
        coordinates = [],
        ...otherProps
    } = props

    if (coordinates.length == 2) {
        otherProps.cx = coordinates[0]
        otherProps.cy = coordinates[1]
    }

    return (
        // FIXME: CircleProps.fillRule throws a type error
        // @ts-ignore: next-line
        <circle
            ref={ref}
            {...otherProps}
        />
    )
})

export default Circle
