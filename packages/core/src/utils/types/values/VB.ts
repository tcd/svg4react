import type { Length } from "./Length"

/**
 * Values for a viewBox.
 *
 * - `<marker>`
 * - `<pattern>`
 * - `<svg>`
 * - `<symbol>`
 * - `<view>`
 *
 * @see [MDN - `viewBox`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)
 * @see [MDN - `filterUnits`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filterUnits)
 * @see [SVG2](https://svgwg.org/svg2-draft/coords.html#ViewBoxAttribute)
 * @see [SVG2 - 8.8. Establishing a new SVG viewport](https://svgwg.org/svg2-draft/coords.html#EstablishingANewSVGViewport)
 */
export type VB =
    | [widthAndHeight: Length]
    | [width: Length, height: Length]
    | [minX: number, minY: number, width: Length, height: Length]
