import type { Property } from "csstype"
import type { IRI } from "../values"

export type CommonSVGPresentationAttributes = Pick<SVGPresentationAttributes,
    | "clipPath"
    | "clipRule"
    | "colorInterpolation"
    | "cursor"
    | "display"
    | "fill"
    | "fillOpacity"
    | "fillRule"
    | "filter"
    | "mask"
    | "opacity"
    | "pointerEvents"
    | "shapeRendering"
    | "stroke"
    | "strokeDasharray"
    | "strokeDashoffset"
    | "strokeLinecap"
    | "strokeLinejoin"
    | "strokeMiterlimit"
    | "strokeOpacity"
    | "strokeWidth"
    | "vectorEffect"
    | "visibility"
>

/**
 * TODO: may need to rename this. It's gotten broader than just presentation attributes.
 */
export interface SVGPresentationAttributes {
    /**
     * Defines or associates a clipping path with the element it is related to.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path)
     */
    clipPath?: Property.ClipPath
    /**
     * The `clip-rule` attribute only applies to graphics elements that are contained within a [`<clipPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) element.
     *
     * The `clip-rule` attribute basically works as the [`fill-rule`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule) attribute, except that it applies to [`<clipPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) definitions.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule)
     */
    clipRule?: "inherit" | "evenodd" | "nonzero"
    /**
     * Specifies the color space for gradient interpolations, color animations, and alpha compositing.
     *
     * @see [MDN Web Docs][https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation]
     */
    colorInterpolation?: "auto" | "linearRGB" | "sRGB"
    /**
     * Specifies the color space for imaging operations performed via filter effects.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation)
     */
    colorInterpolationFilters?: "auto" | "inherit" | "linearRGB" | "sRGB"
    /**
     * Specifies the mouse cursor displayed when the mouse pointer is over an element.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cursor)
     */
    cursor?: Property.Cursor
    /**
     * Defines the shape of a path.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)
     */
    d?: string
    /**
     * Controls the rendering of graphical or container elements.
     *
     * The only way this property has any effect is if it is set to `"none"`.
     *
     * @default undefined // technically it's "inline"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display)
     * @see [SVG2 - 3.2.3 - Controlling Visibility](https://www.w3.org/TR/SVG/render.html#VisibilityControl)
     */
    display?: "none" | undefined
    /**
     * Defines the color of the inside of the graphical element it applies to.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
     */
    fill?: Property.Fill
    /**
     * Defines the opacity of the paint server (color, gradient, pattern, etc.) applied to a shape.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity)
     */
    fillOpacity?: Property.Opacity
    /**
     * Defines the algorithm to use to determine the inside part of a shape.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule)
     */
    fillRule?: Property.FillRule
    /**
     * Specifies the filter effects defined by the [`<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter) element that shall be applied to its element.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter)
     */
    filter?: Property.Filter
    /**
     * Indicates what color to use to flood the current filter primitive subregion.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-color)
     */
    floodColor?: Property.FloodColor
    /**
     * Indicates the opacity value to use across the current filter primitive subregion.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-opacity)
     */
    floodOpacity?: number
    /**
     * Provides a hint to the browser about how to make speed vs. quality tradeoffs as it performs image processing.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/image-rendering)
     */
    imageRendering?: "auto" | "optimizeSpeed" | "optimizeQuality"
    /**
     * Defines the color of the light source for filter primitives
     * elements [`<feDiffuseLighting>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting)
     * and [`<feSpecularLighting>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting).
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lighting-color)
     */
    lightingColor?: Property.LightingColor
    /**
     * A presentation attribute mainly used to bind a given `<mask>` element with the element the attribute belongs to.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask)
     */
    mask?: IRI
    /**
     * Specifies the transparency of an object or of a group of objects, that is, the degree to which the background behind the element is overlaid.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/opacity)
     */
    opacity?: Property.Opacity
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/overflow)
     */
    overflow?: Property.Overflow
    /**
     * Specifies the order that the fill, stroke, and markers of a given shape or text element are painted.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/paint-order)
     * @see [SVG2](https://svgwg.org/svg2-draft/painting.html#PaintOrder)
     */
    paintOrder?: Property.PaintOrder
    /**
     * Specifies the total length for the path, in user units.
     *
     * @see [MDN Web Docs - `pathLength`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength)
     */
    pathLength?: number
    /**
     * Allows defining whether or when an element may be the target of a mouse event.
     *
     * @default "visiblePainted"
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointer-events)
     */
    pointerEvents?: Property.PointerEvents
    /**
     * Provides hints to the renderer about what tradeoffs to make when rendering shapes like paths, circles, or rectangles.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering)
     */
    shapeRendering?: Property.ShapeRendering
    /**
     * A presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke)
     */
    stroke?: Property.Stroke
    /**
     * A presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray)
     */
    strokeDasharray?: Property.StrokeDasharray
    /**
     * A presentation attribute defining an offset on the rendering of the associated dash array.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset)
     */
    strokeDashoffset?: Property.StrokeDashoffset
    /**
     * A presentation attribute defining the shape to be used at the end of open subpaths when they are stroked.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)
     */
    strokeLinecap?: Property.StrokeLinecap
    /**
     * A presentation attribute defining the shape to be used at the corners of paths when they are stroked.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)
     */
    strokeLinejoin?: Property.StrokeLinejoin
    /**
     * A presentation attribute defining a limit on the ratio of the miter length to the `stroke-width` used to draw a miter join.
     * When the limit is exceeded, the join is converted from a miter to a bevel.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit)
     */
    strokeMiterlimit?: Property.StrokeMiterlimit
    /**
     * A presentation attribute defining the opacity of the paint server (*color*, *gradient*, *pattern*, etc.) applied to the stroke of a shape.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity)
     */
    strokeOpacity?: Property.StrokeOpacity
    /**
     * A presentation attribute defining the width of the stroke to be applied to the shape.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)
     */
    strokeWidth?: Property.StrokeWidth
    /**
     * Specifies the vector effect to use when drawing an object.
     * Vector effects are applied before any of the other compositing operations, i.e. filters, masks and clips.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect)
     */
    vectorEffect?: Property.VectorEffect
    /**
     * Lets you control the visibility of graphical elements.
     *
     * With a value of `hidden` or `collapse` the current graphics element is invisible.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility)
     */
    visibility?: Property.Visibility
}
