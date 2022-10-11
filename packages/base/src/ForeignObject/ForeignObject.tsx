import type { ForeignObjectProps } from "./ForeignObject.types"
import processProps from "./process-foreign-object-props"

/**
 * A wrapper for the [`<foreignObject>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) element.
 *
 * The `<foreignObject>` SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.
 */
const ForeignObject = (props: ForeignObjectProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <foreignObject
            {...processedProps}
        />
    )
}

export default ForeignObject
