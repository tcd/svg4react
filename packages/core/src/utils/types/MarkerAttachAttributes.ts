export type SVGMarkerRef = `url(#${string})`

export type MarkerAttachAttributes = {
    /**
     * Defines the arrowhead or polymarker that will be drawn at the first vertex of the given shape.
     *
     * @see [MDN Web Docs - `marker-start`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start)
     *
     * @default "none"
     */
    markerStart?: "none" | SVGMarkerRef
    /**
     * Defines the arrowhead or polymarker that will be drawn at all interior vertices of the given shape.
     *
     * @see [MDN Web Docs - `marker-mid`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-mid)
     *
     * @default "none"
     */
    markerMid?: "none" | SVGMarkerRef
    /**
     * Defines the arrowhead or polymarker that will be drawn at the final vertex of the given shape.
     *
     * @see [MDN Web Docs - `marker-mid`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end)
     *
     * @default "none"
     */
    markerEnd?: "none" | SVGMarkerRef
}
