import type { GProps } from "./G.types"
import processProps from "./process-g-props"

/**
 * A wrapper for the [`<g>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g) element.
 *
 * The `<g>` SVG element is a container used to group other SVG elements.
 *
 * Transformations applied to the `<g>` element are performed on its child elements, and its attributes are inherited by its children.
 * It can also group multiple elements to be referenced later with the [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) element.
 */
const G = (props: GProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <g
            {...processedProps}
        />
    )
}

export default G
