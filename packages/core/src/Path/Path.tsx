import type { PathProps } from "./Path.types"
import processPathProps from "./process-path-props"

/**
 * A wrapper for the [`<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) element.
 *
 * The `<path>` SVG element is the generic element to define a shape.
 *
 * All the basic shapes can be created with a path element.
 */
const Path = (props: PathProps) => {

    const processedProps = processPathProps(props)

    return (
        // @ts-ignore: next-line
        <path
            {...processedProps}
        />
    )
}

export default Path
