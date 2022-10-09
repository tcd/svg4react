import type { Property } from "csstype"

export type CommonSVGPresentationAttributes = Pick<SVGPresentationAttributes,
    | "clipPath"
    | "clipRule"
    | "color"
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
    | "transform"
    | "vectorEffect"
    | "visibility"
>

/**
 * @public
 */
export interface SVGPresentationAttributes {
    /**
     * Specifies how an object is aligned along the font baseline with respect to its parent.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline)
     */
    alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit"
    /**
     * Allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift)
     */
    baselineShift?: Property.BaselineShift
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
    clipRule?: Property.ClipRule
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color)
     */
    color?: Property.Color
    /**
     * Specifies the color space for gradient interpolations, color animations, and alpha compositing.
     *
     * @see [MDN Web Docs][https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation]
     */
    colorInterpolation?: Property.ColorInterpolation
    /**
     * Specifies the color space for imaging operations performed via filter effects.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation)
     */
    colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit"
    /**
     *
     */
    cursor?: Property.Cursor
    /**
     * Defines the shape of the path.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)
     */
    d?: string
    /**
     * Specifies the base writing direction of text.
     */
    direction?: Property.Direction
    /**
     * Controls the rendering of graphical or container elements.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction)
     */
    display?: Property.Display
    /**
     * Defines the baseline used to align the box's text and inline-level contents.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline)
     */
    dominantBaseline?: Property.DominantBaseline
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
    floodOpacity?: Property.FloodOpacity
    // fontFamily?: Property.FontFamily
    // fontSize?: Property.FontSize
    // fontSizeAdjust?: Property.FontSizeAdjust
    // fontStretch?: Property.FontStretch
    // fontStyle?: Property.FontStyle
    // fontVariant?: Property.FontVariant
    // fontWeight?: Property.FontWeight
    /**
     * FIXME: mdn vs csstype
     */
    imageRendering?: Property.ImageRendering
    /**
     * Controls spacing between text characters.
     */
    letterSpacing?: Property.LetterSpacing
    /**
     * Defines the color of the light source for filter primitives
     * elements [`<feDiffuseLighting>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting)
     * and [`<feSpecularLighting>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting).
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lighting-color)
     */
    lightingColor?: Property.LightingColor
    /**
     * Defines the arrowhead or polymarker that will be drawn at the final vertex of the given <path> element or basic shape.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end)
     */
    markerEnd?: Property.MarkerEnd
    /**
     * Defines the arrowhead or polymarker that will be drawn at every vertex other than the first and last vertex of the given <path> element or basic shape.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-mid)
     */
    markerMid?: Property.MarkerMid
    /**
     * Defines the arrowhead or polymarker that will be drawn at the first vertex of the given [`<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) element or basic shape.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start)
     */
    markerStart?: Property.MarkerStart
    /**
     * Alters the visibility of an element by either masking or clipping the image at specific points.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask)
     */
    mask?: Property.Mask
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
     * Indicates what color to use at a gradient stop.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color)
     */
    stopColor?: Property.StopColor
    /**
     * Defines the opacity of a given color gradient stop.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity)
     */
    stopOpacity?: Property.StopOpacity
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
     * Used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where
     * the wrapping area is determined from the [inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size)
     * property relative to a given point.
     *
     * This attribute is not applicable to other types of auto-wrapped text.
     * For those cases you should use `text-align`.
     * For multi-line text, the alignment takes place for each line.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)
     */
    textAnchor?: Property.TextAnchor
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-decoration)
     */
    textDecoration?: Property.TextDecoration
    /**
     * Provides hints to the renderer about what tradeoffs to make when rendering text.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-rendering)
     */
    textRendering?: Property.TextRendering
    /**
     * Defines a list of transform definitions that are applied to an element and the element's children.
     *
     * As of SVG2, transform is a presentation attribute, meaning it can be used as a CSS property.
     * However, be aware that there are some differences in syntax between the CSS property and the attribute.
     * See the documentation for the CSS property [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
     * for the specific syntax to use in that case.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
     */
    transform?: Property.Transform
    /**
     * Specifies how the accumulation of the background image is managed.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/unicode-bidi)
     */
    unicodeBidi?: Property.UnicodeBidi
    /**
     * Specifies the vector effect to use when drawing an object.
     * Vector effects are applied before any of the other compositing operations, i.e. filters, masks and clips.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect)
     */
    vectorEffect?: Property.VectorEffect
    /**
     * Lets you control the visibility of graphical elements.
     * With a value of `hidden` or `collapse` the current graphics element is invisible.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility)
     */
    visibility?: Property.Visibility
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/word-spacing)
     */
    wordSpacing?: Property.WordSpacing
    /**
     * FIXME: mdn vs csstype
     *
     * Specifies whether the initial inline-progression-direction for a `<text>` element shall be:
     * - *left-to-right*
     * - *right-to-left*
     * - *top-to-bottom*
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/writing-mode)
     */
    writingMode?: Property.WritingMode
}
