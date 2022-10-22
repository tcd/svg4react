import type {
    CommonSVGAttributes,
    ISVGProps,
    PreserveAspectRatio,
    Length,
    VB,
} from "../utils"

export type PatternAttributes = {
    /**
     * Shorthand for the values of `viewBox`.
     *
     * @shorthand viewBox
     */
    vb?: VB
    /**
     * Shorthand for the width & height of the pattern tile.
     *
     * @shorthand width
     * @shorthand height
     * @animatable false
     */
    size?: [width: Length, height?: Length]
    /**
     * Shorthand for the x and t coordinate shift of the pattern tile.
     *
     * @shorthand x
     * @shorthand y
     * @animatable false
     */
    coords?: [x: Length, y?: Length]

    /**
     * Defines the coordinate system for the contents of the pattern.
     *
     * @default "userSpaceOnUse"
     * @animatable true
     */
    patternContentUnits?: "userSpaceOnUse" | "objectBoundingBox"
    // /**
    //  * This attribute contains the definition of an optional additional transformation from the pattern coordinate system onto the target coordinate system.
    //  *
    //  * @animatable true
    //  */
    // patternTransform?: any
    /**
     * defines how the SVG fragment must be deformed if it is embedded in a container with a different aspect ratio.
     *
     * @default "xMidYMid meet"
     * @animatable true
     */
    preserveAspectRatio?: PreserveAspectRatio

    /**
     * Determines the height of the pattern tile.
     *
     * @default 0
     * @animatable true
     */
    height?: any
    /**
     * Determines the width of the pattern tile.
     *
     * @default 0
     * @animatable true
     */
    width?: any
    /**
     * Determines the x coordinate shift of the pattern tile.
     *
     * @default 0
     * @animatable true
     */
    x?: any
    /**
     * Determines the y coordinate shift of the pattern tile.
     *
     * @default 0
     * @animatable true
     */
    y?: any
    /**
     * Defines the bound of the SVG viewport for the pattern fragment.
     *
     * @animatable true
     */
    viewBox?: string
}

/**
 * @see [MDN Web Docs - `<pattern>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern)
 */
export type PatternProps =
    ISVGProps<SVGPatternElement>
    & PatternAttributes
    & CommonSVGAttributes
