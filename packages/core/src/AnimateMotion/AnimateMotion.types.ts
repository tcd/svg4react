import type { ISVGProps } from "../utils"

/**
 * @see [MDN Web Docs - `<animateMotion>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion)
 * @see [SVG2 - `<animateMotion>`](https://svgwg.org/specs/animations/#AnimateMotionElement)
 */
export type AnimateMotionAttributes = {}

/**
 * @see [MDN Web Docs - `<animateMotion>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion)
 * @see [SVG2 - `<animateMotion>`](https://svgwg.org/specs/animations/#AnimateMotionElement)
 */
export type AnimateMotionProps =
    ISVGProps<SVGAnimateMotionElement>
    & AnimateMotionAttributes
