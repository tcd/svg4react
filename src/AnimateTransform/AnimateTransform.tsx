import type { AnimateTransformProps } from "./AnimateTransform.types"

/**
 * A wrapper for the [`<animateTransform>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform) element.
 *
 * The `<animateTransform>` element animates a transformation attribute on its target element,
 * thereby allowing animations to control translation, scaling, rotation, and/or skewing.
 */
const AnimateTransform = (props: AnimateTransformProps): JSX.Element => {
    return (
        <animateTransform
            {...props}
        />
    )
}

export default AnimateTransform
