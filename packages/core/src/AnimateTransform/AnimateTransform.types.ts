import type { ISVGProps, SVGAnimationAttributes } from "../utils"

export type AnimateTransformAttributes = {
    /**
     * The type of transformation, whose values change over time.
     *
     * @see [MDB Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type#for_the_animatetransform_elements)
     */
    type?: "translate" | "scale" | "rotate" | "skewX" | "skewY"
}

/**
 * @see [MDN Web Docs - `<animateTransform>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform)
 */
export type AnimateTransformProps =
    ISVGProps<SVGAnimateTransformElement>
    & AnimateTransformAttributes
    & SVGAnimationAttributes
