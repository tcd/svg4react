import type { LineProps } from "./Line.types"

/**
 * @public
 *
 * A wrapper for the [`<line>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) element.
 *
 * The `<line>` SVG element is a [basic shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) used to create a line connecting two points.
 */
const Line = (props: LineProps): JSX.Element => {

    const {
        coordinates: [
            x1 = 0,
            y1 = 0,
            x2 = 0,
            y2 = 0,
        ],
        ...otherProps
    } = props

    return (
        // @ts-ignore: next-line
        <line
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            {...otherProps}
        />
    )
}

export default Line
