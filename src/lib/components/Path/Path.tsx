import type { PathProps } from "./Path.types"
import { buildDrawing } from "./build-drawing"

/**
 * @public
 *
 * A wrapper for the [`<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) element.
 *
 * The `<path>` SVG element is the generic element to define a shape.
 *
 * All the basic shapes can be created with a path element.
 */
const Path = (props: PathProps): JSX.Element => {

    // const {
    //     id,
    //     commands,
    //     fill="none",
    //     stroke="black",
    // } = props

    const {
        commands,
        ...otherProps
    } = props

    const d = buildDrawing(commands)

    return (
        <path
            d={d}
            {...otherProps}
        />
    )
}

export default Path
