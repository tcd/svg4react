import type { ClockValue } from "../values"

/**
 * TODO: split these up by valid groups (ex: `from, to, by`, `values`, etc.)
 *
 * @see [SVG Animations Level 2](https://svgwg.org/specs/animations/)
 * @see [SVG2 - `<animate>`](https://svgwg.org/specs/animations/#AnimateElement)
 * @see [MDN Web Docs - `<animate>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate)
 * @see [SIML Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/)
 */
export type SVGAnimationAttributes<TAttributeType = any> = {
    // -------------------------------------------------------------------------
    // Animation Attribute Target Attributes
    // -------------------------------------------------------------------------
    /**
     * The name of the CSS property or attribute of the target element that is going to be changed during an animation.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName)
     */
    attributeName?: string
    // -------------------------------------------------------------------------
    // Animation Addition Attributes
    // -------------------------------------------------------------------------
    /**
     * Controls whether or not an animation is additive.
     *
     * @default "replace"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive)
     */
    additive?: 	"replace" | "sum"
    /**
     * Controls whether or not an animation is cumulative.
     *
     * @default "none"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate)
     */
    accumulate?: "none" | "sum"
    // -------------------------------------------------------------------------
    // Animation Timing Attributes
    // -------------------------------------------------------------------------
    /**
     * When an animation should begin or when an element should be discarded.
     *
     * @default "0s"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin)
     */
    begin?: any
    /**
     * The simple duration of an animation.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dur)
     * @see [SVG2](https://svgwg.org/specs/animations/#DurAttribute)
     */
    dur?: ClockValue | "indefinite"
    /**
     * An end value for the animation that can constrain the active duration.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/end)
     * @see [SVG2](https://svgwg.org/specs/animations/#EndAttribute)
     */
    end?: any
    /**
     * The minimum value of the active animation duration.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/min)
     */
    min?: any
    /**
     * The maximum value of the active animation duration.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/max)
     */
    max?: any
    /**
     * Specifies whether or not an animation can restart.
     *
     * @default "always"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/restart)
     */
    restart?: "always" | "whenNotActive" | "never"
    /**
     * The number of times an animation will take place.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatCount)
     */
    repeatCount?: number | "indefinite"
    /**
     * The total duration for repeating an animation.
     *
     * Basically an alternative to `repeatCount`.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatDur)
     */
    repeatDur?: ClockValue | "indefinite"
    /**
     * Defines the final state of the animation.
     *
     * Options:
     *
     * |            |                                             |
     * |------------|---------------------------------------------|
     * | `"freeze"` | Keep the state of the last animation frame  |
     * | `"remove"` | Keep the state of the first animation frame |
     *
     * @default "remove"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#animate)
     */
    fill?: "freeze" | "remove" // TODO: decide if we like tables in jsdoc
    // -------------------------------------------------------------------------
    // Animation Value Attributes
    // -------------------------------------------------------------------------
    /**
     * Specifies the [interpolation](https://developer.mozilla.org/en-US/docs/Glossary/Interpolation) mode for the animation.
     *
     * @default "linear"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode)
     */
    calcMode?: "discrete" | "linear" | "paced" | "spline"
    /**
     * A list of values defining the sequence of values over the course of the animation.
     *
     * If this attribute is specified, any `from`, `to`, and `by` attribute values set on the element are ignored.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values)
     */
    values?: TAttributeType[]
    /**
     * A list of time values used to control the pacing of the animation.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyTimes)
     */
    keyTimes?: any[]
    /**
     * A set of Bézier curve control points associated with the `keyTimes` list, defining a cubic Bézier function that controls interval pacing.
     *
     * This attribute is ignored unless the `calcMode` attribute is set to `"spline"`.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keySplines)
     */
    keySplines?: any[]
    /**
     * The initial value of the attribute that will be modified during the animation.
     *
     * ## Usage
     *
     * When used with the `to` attribute, the animation will change the modified attribute from the `from` value to the `to` value.
     *
     * When used with the `by` attribute, the animation will change the attribute relatively from the `from` value by the value specified in `by`.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/from)
     */
    from?: TAttributeType
    /**
     * The final value of the attribute that will be modified during the animation.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/to)
     */
    to?: TAttributeType
    /**
     * A relative offset value for an attribute that will be modified during an animation.
     *
     * ## Usage
     *
     * The starting value for the attribute is either indicated by specifying it as value for the attribute given in the `attributeName` or the `from` attribute.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by)
     */
    by?: TAttributeType
}
