import type { StopProps } from "./Stop.types"

/**
 * A wrapper for the [`<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop) element.
 *
 * The SVG `<stop>` element defines a color and its position to use on a gradient.
 *
 * This element is always a child of a [`<linearGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient) or [`<radialGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient) element.
 */
const Stop = (props: StopProps): JSX.Element => {
    return (
        // @ts-ignore: next-line
        <stop {...props} />
    )
}

export default Stop
