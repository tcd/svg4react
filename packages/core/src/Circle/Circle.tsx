import type { CircleProps } from "./Circle.types"
import processCircleProps from "./process-circle-props"

/**
 * A wrapper for the [`<circle>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) element.
 *
 * The `<circle>` SVG element is an [SVG basic shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes),
 * used to draw circles based on a center point and a radius.
 */
const Circle = (props: CircleProps) => {

    const processedProps = processCircleProps(props)

    return (
        // @ts-ignore: next-line
        <circle
            {...processedProps}
        />
    )
}

export default Circle
