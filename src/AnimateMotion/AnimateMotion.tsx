import type { AnimateMotionProps } from "./AnimateMotion.types"

/**
 * A wrapper for the [`<animateMotion>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion) element.
 *
 * The SVG `<animateMotion>` element provides a way to define how an element moves along a motion path.
 */
const AnimateMotion = (props: AnimateMotionProps): JSX.Element => {
    return (
        <animateMotion
            {...props}
        />
    )
}

export default AnimateMotion
