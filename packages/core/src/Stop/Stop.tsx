import type { StopProps } from "./Stop.types"

/**
 * @public
 *
 * @see [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
const Stop = (props: StopProps): JSX.Element => {
    return (
        <stop {...props}/>
    )
}

export default Stop
