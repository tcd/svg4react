import type { AnimateProps } from "./Animate.types"
import { processAnimationProps } from "../utils"

/**
 * A wrapper for the [`<animate>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) element.
 *
 * The SVG `<animate>` element provides a way to animate an attribute of an element over time.
 */
const Animate = (props: AnimateProps): JSX.Element => {

    const processedProps = processAnimationProps(props)

    return (
        // @ts-ignore: next-line
        <animate
            {...processedProps}
        />
    )
}

export default Animate
