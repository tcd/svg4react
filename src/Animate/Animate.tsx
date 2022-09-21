import type { AnimateProps } from "./Animate.types"

/**
 * A wrapper for the [`<animate>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) element.
 *
 * The SVG `<animate>` element provides a way to animate an attribute of an element over time.
 */
const Animate = (props: AnimateProps): JSX.Element => {
    return (
        <animate
            {...props}
        />
    )
}

export default Animate
