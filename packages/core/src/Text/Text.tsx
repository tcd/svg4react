import type { TextProps } from "./Text.types"
import processProps from "./process-text-props"

/**
 * A wrapper for the [`<text>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text) element.
 *
 * The SVG `<text>` element draws a graphics element consisting of text.
 * It's possible to apply a gradient, pattern, clipping path, mask, or filter to `<text>`, like any other SVG graphics element.
 *
 * If text is included in SVG not inside of a `<text>` element, it is not rendered.
 * This is different than being hidden by default, as setting the `display` property won't show the text.
 */
const Text = (props: TextProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <text
            {...processedProps}
        />
    )
}

export default Text
