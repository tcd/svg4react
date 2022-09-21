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
const Circle = forwardRef<SVGCircleElement>(function Circle(props: CircleProps, ref) {
    return (
        // FIXME: CircleProps.fillRule throws a type error
        // @ts-ignore: next-line
        <circle
            ref={ref}
            {...props}
        />
    )
})

export default Circle

// let example = () => {
//     return <Circle
//         cx={2}
//         cy={0}
//         r={0}
//     />
// }
