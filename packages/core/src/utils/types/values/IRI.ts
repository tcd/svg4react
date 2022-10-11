/**
 * Internationalized Resource Identifier
 *
 * ## Reference
 *
 * - SVG2 specification:
 *     - [16: Linking](https://www.w3.org/TR/SVG/linking.html)
 *     - [16.1.7.5: Valid URL Targets](https://www.w3.org/TR/SVG/linking.html#processingURL-validity)
 *     - [13.2: Specifying paint](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint)
 *     - [13.7.2: DataTypeMarkerRef](https://svgwg.org/svg2-draft/painting.html#DataTypeMarkerRef)
 * - MDN Web Docs
 *     - [Content Type - `iri`](https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#iri)
 */
export type IRI = `#${string}` | `url(#${string})`
