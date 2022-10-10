import type { ISVGProps, SVGAnimationAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<animateMotion>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion)
 * @see [SVG2 - `<animateMotion>`](https://svgwg.org/specs/animations/#AnimateMotionElement)
 */
export type AnimateMotionAttributes = {
    /**
     * Indicates, in the range `[0,1]`, how far the object is along the path for each `keyTimes` associated value.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyPoints)
     */
    keyPoints?: any[]
    /**
     * FIXME: process this. Also `mpath`
     *
     * Defines the path of the motion, using the same syntax as the `d` attribute.
     */
    path?: string
    /**
     * Defines a rotation applied to the element animated along a path.
     *
     * @default 0
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rotate)
     */
    rotate?: number | "auto" | "auto-reverse"
}

/**
 * @see [MDN Web Docs - `<animateMotion>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion)
 * @see [SVG2 - `<animateMotion>`](https://svgwg.org/specs/animations/#AnimateMotionElement)
 */
export type AnimateMotionProps =
    ISVGProps<SVGAnimateMotionElement>
    & AnimateMotionAttributes
    & SVGAnimationAttributes
