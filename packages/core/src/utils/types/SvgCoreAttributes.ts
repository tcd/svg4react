import type { Property } from "csstype"

export interface SvgCoreAttributes {
    /**
     * Specifies the order that the fill, stroke, and markers of a given shape or text element are painted.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/paint-order)
     * @see [SVG2](https://svgwg.org/svg2-draft/painting.html#PaintOrder)
     */
    paintOrder?: Property.PaintOrder
    /**
     * Allows you to control whether an element is focusable and to define the relative order of the element for the purposes of sequential focus navigation.
     *
     * You can use this attribute with any SVG element.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/tabindex)
     */
    tabIndex?: number
}
