/**
 * @see [MDN Web Docs - `<animate>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate)
 * @see [SVG2 - `<animate>`](https://svgwg.org/specs/animations/#AnimateElement)
 */
export type AnimationAttributes = {
    /**
     * The name of the CSS property or attribute of the target element that is going to be changed during an animation.
     */
    attributeName?: string
    /**
     * Controls whether or not an animation is additive.
     *
     * @default "replace"
     */
    additive?: 	"replace" | "sum"
    /**
     * Controls whether or not an animation is cumulative.
     *
     * @default "none"
     */
    cumulative?: "none" | "sum"
    // -------------------------------------------------------------------------
    // Animation Timing Attributes
    // -------------------------------------------------------------------------
    /**
     * When an animation should begin or when an element should be discarded.
     */
    begin?: any
    /**
     * The simple duration of an animation.
     */
    dur?: any
    /**
     * An end value for the animation that can constrain the active duration.
     */
    end?: any
    /**
     * The minimum value of the active animation duration.
     */
    min?: any
    /**
     * The maximum value of the active animation duration.
     */
    max?: any
    /**
     * Specifies whether or not an animation can restart.
     *
     * @default "always"
     */
    restart?: "always" | "whenNotActive" | "never"
    /**
     * The number of times an animation will take place.
     */
    repeatCount?: number | "indefinite"
    /**
     * The total duration for repeating an animation.
     */
    repeatDur?: any
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
     */
    fill?: "freeze" | "remove" // TODO: decide if we like tables in jsdoc
    // -------------------------------------------------------------------------
    // Animation Value Attributes
    // -------------------------------------------------------------------------
    /**
     * Specifies the [interpolation](https://developer.mozilla.org/en-US/docs/Glossary/Interpolation) mode for the animation.
     *
     * @default "linear"
     */
    calcMode?: "discrete" | "linear" | "paced" | "spline"
    /**
     * A list of values defining the sequence of values over the course of the animation.
     *
     * If this attribute is specified, any `from`, `to`, and `by` attribute values set on the element are ignored.
     */
    values?: any[]
    /**
     * A list of time values used to control the pacing of the animation.
     */
    keyTimes?: any[]
    /**
     * A set of Bézier curve control points associated with the `keyTimes` list, defining a cubic Bézier function that controls interval pacing.
     *
     * This attribute is ignored unless the `calcMode` attribute is set to `"spline"`.
     */
    keySplines?: any[]
    /**
     * The initial value of the attribute that will be modified during the animation.
     */
    from?: any
    /**
     * The final value of the attribute that will be modified during the animation.
     */
    to?: any
    /**
     * A relative offset value for an attribute that will be modified during an animation.
     */
    by?: any
}
