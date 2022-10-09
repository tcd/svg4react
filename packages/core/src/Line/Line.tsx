import type { LineProps } from "./Line.types"
import { processLineProps } from "./process-line-props"

/**
 * A wrapper for the [`<line>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) element.
 *
 * The `<line>` SVG element is a [basic shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) used to create a line connecting two points.
 */
const Line = (props: LineProps): JSX.Element => {

    const processedProps = processLineProps(props)

    return (
        // @ts-ignore: next-line
        <line
            {...processedProps}
        />
    )
}

export default Line
