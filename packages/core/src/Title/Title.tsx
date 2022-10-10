import type { TitleProps } from "./Title.types"

/**
 * A wrapper for the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title) element.
 *
 * The `<title>` element provides an accessible, short-text description of any SVG element.
 *
 * Text in a `<title>` element is not rendered as part of the graphic, but browsers usually display it as a tooltip.
 *
 * If an element can be described by visible text, it is recommended to reference that text with an `aria-labelledby` attribute rather than using the `<title>` element.
 */
const Title = (props: TitleProps) => {
    return (
        // @ts-ignore: next-line
        <title {...props} />
    )
}

export default Title
