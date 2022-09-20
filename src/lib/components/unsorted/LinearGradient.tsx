import type { SVGProps } from "react"

import type { LinearGradientAttributes } from "svg4react"
import type { StopProps } from "./Stop"
import { Stop } from "./Stop"

/**
 * @public
 *
 * All properties aside from `id` and `stops` & `className` are animatable.
 */
export type LinearGradientProps =
    SVGProps<SVGLinearGradientElement> &
    LinearGradientAttributes &
    {
        id: string
        className?: string
        stops?: StopProps[]
    }

const _exampleProps: LinearGradientProps = {
    id: "example",
}

/**
 * @public
 *
 * ## Reference
 *
 * - [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export const LinearGradient = (props: LinearGradientProps): JSX.Element => {
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
