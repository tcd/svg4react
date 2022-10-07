import type { SVGProps } from "react"

export type AnimateTransformAttributes = {
    /**
     * The type of transformation, whose values change over time.
     *
     * @see [MDB Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type#for_the_animatetransform_elements)
     */
    type?: "translate" | "scale" | "rotate" | "skewX" | "skewY"
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform
 */
export type AnimateTransformProps =
    Omit<SVGProps<SVGAnimateTransformElement>, keyof AnimateTransformAttributes>
    & AnimateTransformAttributes
