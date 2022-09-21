import type { LinearGradientProps } from "./LinearGradient.types"
import Stop from "../Stop"

/**
 * @public
 *
 * ## Reference
 *
 * - [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
const LinearGradient = (props: LinearGradientProps): JSX.Element => {
    const {
        stops,
        ...otherProps
    } = props
    return (
        <linearGradient {...otherProps}>
            {stops.map((stop, index) => <Stop key={index} {...stop} />)}
        </linearGradient>
    )
}

export default LinearGradient
