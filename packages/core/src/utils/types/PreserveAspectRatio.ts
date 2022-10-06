// export type XorY = "x" | "y"
export type MinMidMax = "Min" | "Mid" | "Max"
export type MeetOrSlice = "meet" | "slice"

/**
 * @see [SVG2 - `preserveAspectRatio`](https://svgwg.org/svg2-draft/coords.html#PreserveAspectRatioAttribute)
 */
export type PreserveAspectRatio = "none" | `x${MinMidMax}Y${MinMidMax} ${MeetOrSlice}`
