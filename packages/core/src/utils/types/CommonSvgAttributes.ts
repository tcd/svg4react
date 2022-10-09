import type { Property } from "csstype"

/**
 * Not presentation attributes.
 */
export interface CommonSvgAttributes {
    /**
     * Specifies the order that the fill, stroke, and markers of a given shape or text element are painted.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/paint-order)
     * @see [SVG2](https://svgwg.org/svg2-draft/painting.html#PaintOrder)
     */
    paintOrder?: Property.PaintOrder
}
