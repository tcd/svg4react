import Stop from "../Stop"
import type { LinearGradientProps } from "./LinearGradient.types"
import processLinearGradientProps from "./process-linear-gradient-props"

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

    const processedProps = processLinearGradientProps(otherProps)

    const $stops = stops.map((stop, index) => <Stop key={index} {...stop} />)

    return (
        // @ts-ignore: next-line
        <linearGradient {...processedProps}>
            <>{$stops}</>
            {children && children}
        </linearGradient>
    )
}

export default LinearGradient
