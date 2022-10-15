import type { AnimateTransformProps } from "./AnimateTransform.types"
import { processAnimationProps } from "../utils"

/**
 * A wrapper for the [`<animateTransform>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform) element.
 *
 * The `<animateTransform>` element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.
 */
const AnimateTransform = (props: AnimateTransformProps): JSX.Element => {

    const processedProps = processAnimationProps(props)

    return (
        // @ts-ignore: next-line
        <animateTransform
            attributeName="transform"
            {...processedProps}
        />
    )
}

export default AnimateTransform
