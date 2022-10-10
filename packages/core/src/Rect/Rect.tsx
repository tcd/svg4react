import type { RectProps } from "./Rect.types"
import processProps from "./process-rect-props"

/**
 * A wrapper for the [`<rect>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect) element.
 *
 * The `<rect>` element is a [basic SVG shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) that draws rectangles,
 * defined by their position, width, and height.
 */
const Rect = (props: RectProps): JSX.Element => {

    const processedProps = processProps(props)

    // @ts-ignore: next-line
    return <rect {...processedProps} />
}

export default Rect
