import type { Property } from "csstype"

// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype
type LowercaseDeprecatedAttribute =
    | "clip"
    | "colorProfile"
    | "colorRendering"
    | "enableBackground"
    | "glyphOrientationHorizontal"
    | "glyphOrientationVertical"
    | "kerning"
    | "solidColor"
    | "solidOpacity"
    // | "speed"
export type DeprecatedAttribute = LowercaseDeprecatedAttribute | Capitalize<LowercaseDeprecatedAttribute>

// =============================================================================

/**
 * Specifies how an object is aligned along the font baseline with respect to its parent.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline
 */
export type AlignmentBaseline = "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit"
/**
 * Allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift
 */
export type BaselineShift = Property.BaselineShift
/**
 * Defines or associates a clipping path with the element it is related to.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path
 */
export type ClipPath = Property.ClipPath
/**
 * The `clip-rule` attribute only applies to graphics elements that are contained within a [`<clipPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) element.
 *
 * The `clip-rule` attribute basically works as the [`fill-rule`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule) attribute, except that it applies to [`<clipPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) definitions.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule
 */
export type ClipRule = Property.ClipRule
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color
 */
export type Color = Property.Color
/**
 * Specifies the color space for gradient interpolations, color animations, and alpha compositing.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation
 */
export type ColorInterpolation = Property.ColorInterpolation
/**
 * Specifies the color space for imaging operations performed via filter effects.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation
 */
export type ColorInterpolationFilters = "auto" | "sRGB" | "linearRGB" | "inherit"
/**
 *
 */
export type Cursor = Property.Cursor
/**
 * Defines the shape of the path.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
 */
export type D = string
/**
 * Specifies the base writing direction of text.
 */
export type Direction = Property.Direction
/**
 * Controls the rendering of graphical or container elements.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction
 */
export type Display = Property.Display
/**
 * Defines the baseline used to align the box's text and inline-level contents.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline
 */
export type DominantBaseline = Property.DominantBaseline
/**
 * Defines the color of the inside of the graphical element it applies to.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
 */
export type Fill = Property.Fill
/**
 * Defines the opacity of the paint server (color, gradient, pattern, etc.) applied to a shape.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity
 */
export type FillOpacity = Property.Opacity
/**
 * Defines the algorithm to use to determine the inside part of a shape.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule
 */
export type FillRule = Property.FillRule
/**
 * Specifies the filter effects defined by the [`<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter) element that shall be applied to its element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter
 */
export type Filter = Property.Filter
/**
 * Indicates what color to use to flood the current filter primitive subregion.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-color
 */
export type FloodColor = Property.FloodColor
/**
 * Indicates the opacity value to use across the current filter primitive subregion.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-opacity
 */
export type FloodOpacity = Property.FloodOpacity
// export type FontFamily = Property.FontFamily
// export type FontSize = Property.FontSize
// export type FontSizeAdjust = Property.FontSizeAdjust
// export type FontStretch = Property.FontStretch
// export type FontStyle = Property.FontStyle
// export type FontVariant = Property.FontVariant
// export type FontWeight = Property.FontWeight
/**
 * FIXME: mdn vs csstype
 */
export type ImageRendering = Property.ImageRendering
/**
 * Controls spacing between text characters.
 */
export type LetterSpacing = Property.LetterSpacing
/**
 * Defines the color of the light source for filter primitives
 * elements [`<feDiffuseLighting>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting)
 * and [`<feSpecularLighting>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lighting-color
 */
export type LightingColor = Property.LightingColor
/**
 * Defines the arrowhead or polymarker that will be drawn at the final vertex of the given <path> element or basic shape.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end
 */
export type MarkerEnd = Property.MarkerEnd
/**
 * Defines the arrowhead or polymarker that will be drawn at every vertex other than the first and last vertex of the given <path> element or basic shape.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-mid
 */
export type MarkerMid = Property.MarkerMid
/**
 * Defines the arrowhead or polymarker that will be drawn at the first vertex of the given [`<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) element or basic shape.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start
 */
export type MarkerStart = Property.MarkerStart
/**
 * Alters the visibility of an element by either masking or clipping the image at specific points.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask
 */
export type Mask = Property.Mask
/**
 * Specifies the transparency of an object or of a group of objects, that is, the degree to which the background behind the element is overlaid.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/opacity
 */
export type Opacity = Property.Opacity
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/overflow
 */
export type Overflow = Property.Overflow
/**
 *
 */
export type PointerEvents = Property.PointerEvents
/**
 * Provides hints to the renderer about what tradeoffs to make when rendering shapes like paths, circles, or rectangles.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering
 */
export type ShapeRendering = Property.ShapeRendering
/**
 * Indicates what color to use at a gradient stop.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color
 */
export type StopColor = Property.StopColor
/**
 * Defines the opacity of a given color gradient stop.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity
 */
export type StopOpacity = Property.StopOpacity
/**
 * A presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke
 */
export type Stroke = Property.Stroke
/**
 * A presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
 */
export type StrokeDasharray = Property.StrokeDasharray
/**
 * A presentation attribute defining an offset on the rendering of the associated dash array.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset
 */
export type StrokeDashoffset = Property.StrokeDashoffset
/**
 * A presentation attribute defining the shape to be used at the end of open subpaths when they are stroked.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
 */
export type StrokeLinecap = Property.StrokeLinecap
/**
 * A presentation attribute defining the shape to be used at the corners of paths when they are stroked.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
 */
export type StrokeLinejoin = Property.StrokeLinejoin
/**
 * A presentation attribute defining a limit on the ratio of the miter length to the `stroke-width` used to draw a miter join.
 * When the limit is exceeded, the join is converted from a miter to a bevel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
 */
export type StrokeMiterlimit = Property.StrokeMiterlimit
/**
 * A presentation attribute defining the opacity of the paint server (*color*, *gradient*, *pattern*, etc.) applied to the stroke of a shape.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity
 */
export type StrokeOpacity = Property.StrokeOpacity
/**
 * A presentation attribute defining the width of the stroke to be applied to the shape.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
 */
export type StrokeWidth = Property.StrokeWidth
/**
 * Used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where
 * the wrapping area is determined from the [inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size)
 * property relative to a given point.
 *
 * This attribute is not applicable to other types of auto-wrapped text.
 * For those cases you should use `text-align`.
 * For multi-line text, the alignment takes place for each line.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor
 */
export type TextAnchor = Property.TextAnchor
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-decoration
 */
export type TextDecoration = Property.TextDecoration
/**
 * Provides hints to the renderer about what tradeoffs to make when rendering text.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-rendering
 */
export type TextRendering = Property.TextRendering
/**
 * Defines a list of transform definitions that are applied to an element and the element's children.
 *
 * As of SVG2, transform is a presentation attribute, meaning it can be used as a CSS property.
 * However, be aware that there are some differences in syntax between the CSS property and the attribute.
 * See the documentation for the CSS property [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
 * for the specific syntax to use in that case.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
 */
export type Transform = Property.Transform
/**
 * Specifies how the accumulation of the background image is managed.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/unicode-bidi
 */
export type UnicodeBidi = Property.UnicodeBidi
/**
 * Specifies the vector effect to use when drawing an object.
 * Vector effects are applied before any of the other compositing operations, i.e. filters, masks and clips.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect
 */
export type VectorEffect = Property.VectorEffect
/**
 * Lets you control the visibility of graphical elements.
 * With a value of `hidden` or `collapse` the current graphics element is invisible.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility
 */
export type Visibility = Property.Visibility
/**
 *
 */
export type WordSpacing = Property.WordSpacing
/**
 * FIXME: mdn vs csstype
 *
 * Specifies whether the initial inline-progression-direction for a `<text>` element shall be:
 * - *left-to-right*
 * - *right-to-left*
 * - *top-to-bottom*
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/writing-mode
 */
export type WritingMode = Property.WritingMode
