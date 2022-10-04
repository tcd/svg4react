import Stop from "../Stop"
import type { LinearGradientProps } from "./LinearGradient.types"

/**
 * A wrapper for the [`<linearGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient) element.
 *
 * The `<linearGradient>` element lets authors define linear gradients to apply to other SVG elements.
 *
 * @see [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
const LinearGradient = (props: LinearGradientProps): JSX.Element => {
    const {
        stops,
        children = undefined,
        ...otherProps
    } = props
    return (
        // @ts-ignore: next-line
        <linearGradient {...otherProps}>
            {stops.map((stop, index) => <Stop key={index} {...stop} />)}
            {children && children}
        </linearGradient>
    )
}

export default LinearGradient
