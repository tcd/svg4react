import type { IRI } from "../values"

/**
 * Props used to attach `<Marker>` shapes to the following elements:
 *
 * - `<Path>`
 * - `<Line>`
 * - `<Polyline>`
 * - `<Polygon>`
 *
 * @see [MDN Web Docs - `<marker>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker)
 */
export type MarkerAttachAttributes = {
    /**
     * Defines the arrowhead or polymarker that will be drawn at the first vertex of the given shape.
     *
     * @see [MDN Web Docs - `marker-start`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start)
     *
     * @animatable discrete
     *
     * @default "none"
     */
    markerStart?: "none" | IRI
    /**
     * Defines the arrowhead or polymarker that will be drawn at all interior vertices of the given shape.
     *
     * @see [MDN Web Docs - `marker-mid`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-mid)
     *
     * @animatable discrete
     *
     * @default "none"
     */
    markerMid?: "none" | IRI
    /**
     * Defines the arrowhead or polymarker that will be drawn at the final vertex of the given shape.
     *
     * @see [MDN Web Docs - `marker-mid`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end)
     *
     * @animatable discrete
     *
     * @default "none"
     */
    markerEnd?: "none" | IRI
}
