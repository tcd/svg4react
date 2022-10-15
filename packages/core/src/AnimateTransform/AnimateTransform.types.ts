import type { ISVGProps, SVGAnimationAttributes } from "../utils"

export type AnimateTransformType = "translate" | "scale" | "rotate" | "skewX" | "skewY"

export type AnimateTransformAttributes = {
    /**
     * The type of transformation, whose values change over time.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type#for_the_animatetransform_elements)
     */
    type?: AnimateTransformType
}

/**
 * @see [MDN Web Docs - `<animateTransform>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform)
 */
export type AnimateTransformProps =
    ISVGProps<SVGAnimateTransformElement>
    & AnimateTransformAttributes
    & Omit<SVGAnimationAttributes, "attributeName"> // always set to "transform"
