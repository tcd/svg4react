import type { TextPathProps } from "./TextPath.types"
import processProps from "./process-text-path-props"

/**
 * A wrapper for the [`<textPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath) element.
 *
 * To render text along the shape of a `<path>`, enclose the text in a `<textPath>` element that has an href attribute with a reference to the `<path>` element.
 */
const TextPath = (props: TextPathProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <textPath
            {...processedProps}
        />
    )
}

export default TextPath
