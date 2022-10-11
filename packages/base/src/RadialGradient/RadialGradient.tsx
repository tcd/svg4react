import Stop from "../Stop"
import type { RadialGradientProps } from "./RadialGradient.types"

/**
 * A wrapper for the [`<radialGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient) element.
 *
 * The `<radialGradient>` element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.
 *
 * @see See also [MDN Web Docs - `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
const RadialGradient = (props: RadialGradientProps): JSX.Element => {
    const {
        stops,
        children = undefined,
        ...otherProps
    } = props

    const $stops = stops.map((stop, index) => <Stop key={index} {...stop} />)

    return (
        // @ts-ignore: next-line
        <radialGradient {...otherProps}>
            <>{$stops}</>
            {children && children}
        </radialGradient>
    )
}

export default RadialGradient
