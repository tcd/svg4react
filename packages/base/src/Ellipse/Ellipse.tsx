import type { EllipseProps } from "./Ellipse.types"
import processProps from "./process-ellipse-props"

/**
 * A wrapper for the [`<ellipse>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse) element.
 *
 * The `<ellipse>` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
 *
 * **Note**: Ellipses are unable to specify the exact orientation of the ellipse (if, for example, you wanted to draw an ellipse tilted at a 45 degree angle), but they can be rotated by using the `transform` attribute.
 */
const Ellipse = (props: EllipseProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <ellipse
            {...processedProps}
        />
    )
}

export default Ellipse
