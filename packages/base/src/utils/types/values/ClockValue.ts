export namespace ClockValues {
    export type Metric = "h" | "min" | "s" | "ms"
}

/**
 * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#clock-value)
 * @see [SVG Animations Level 2 - ClockValueSyntax](https://svgwg.org/specs/animations/#ClockValueSyntax)
 */
export type ClockValue = number | string
