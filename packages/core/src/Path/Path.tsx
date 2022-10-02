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
const Path = (props: PathProps) => {

    // const {
    //     id,
    //     commands,
    //     fill="none",
    //     stroke="black",
    // } = props

    let {
        // @ts-ignore: next-line
        commands = null,
        // @ts-ignore: next-line
        d = null,
        ...otherProps
    } = props

    if (d === null) {
        d = buildDrawing(commands)
    }

    return (
        // @ts-ignore: next-line
        <path
            d={d}
            {...otherProps}
        />
    )
}

export default Path
