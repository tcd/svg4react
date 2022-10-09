import { createContext } from "react"

/**
 * - `Circle`
 * - `Ellipse`
 * - `Path`
 * - `Polygon`
 * - `Polyline`
 * - `Rect`
 * - `Text`
 * - `TextPath`
 * - `Tspan`
 *
 * Animation Components:
 *
 * - `Animate`
 * - `AnimateColor`
 * - `AnimateMotion`
 * - `AnimateTransform`
 * - `Set`
 *
 * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
 */
export type ElementWithFill =
    | "Circle"
    | "Ellipse"
    | "Path"
    | "Polygon"
    | "Polyline"
    | "Rect"
    | "Text"
    | "TextPath"
    | "Tspan"
    // | "Animate"
    // | "AnimateColor"
    // | "AnimateMotion"
    // | "AnimateTransform"
    // | "Set"

export interface ISvg4ReactContextOptions {
    /**
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
     */
    defaultFill?: string
}

const _DEFAULT_FILLS: Record<ElementWithFill, string> = {
    Circle: "black",
    Ellipse: "black",
    Path: "black",
    Polygon: "black",
    Polyline: "black",
    Rect: "black",
    Text: "black",
    TextPath: "black",
    Tspan: "black",
    // Animate: "remove",
    // AnimateColor: "remove",
    // AnimateMotion: "remove",
    // AnimateTransform: "remove",
    // Set: "remove",
}
