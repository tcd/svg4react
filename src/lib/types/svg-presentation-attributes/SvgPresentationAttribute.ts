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
export type Cursor = Property.Cursor
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
export type FloodColor = Property.FloodColor
export type FloodOpacity = Property.FloodOpacity
export type FontFamily = Property.FontFamily
export type FontSize = Property.FontSize
export type FontSizeAdjust = Property.FontSizeAdjust
export type FontStretch = Property.FontStretch
export type FontStyle = Property.FontStyle
export type FontVariant = Property.FontVariant
export type FontWeight = Property.FontWeight
// FIXME: mdn vs csstype
export type ImageRendering = Property.ImageRendering
/**
 * Controls spacing between text characters.
 */
export type LetterSpacing = Property.LetterSpacing
/**
 * Defines the color of the light source for filter primitives
 * elements [`<feDiffuseLighting>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting)
 * and [`<feSpecularLighting>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting).
 */
export type LightingColor = Property.LightingColor
/**
 * Defines the arrowhead or polymarker that will be drawn at the final vertex of the given <path> element or basic shape.
 */
export type MarkerEnd = Property.MarkerEnd
/**
 * Defines the arrowhead or polymarker that will be drawn at every vertex other than the first and last vertex of the given <path> element or basic shape.
 */
export type MarkerMid = Property.MarkerMid
/**
 * Defines the arrowhead or polymarker that will be drawn at the first vertex of the given [`<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) element or basic shape.
 */
export type MarkerStart = Property.MarkerStart
/**
 * Alters the visibility of an element by either masking or clipping the image at specific points.
 */
export type Mask = Property.Mask
export type Opacity = Property.Opacity
export type Overflow = Property.Overflow
export type PointerEvents = Property.PointerEvents
export type ShapeRendering = Property.ShapeRendering
export type StopColor = Property.StopColor
export type StopOpacity = Property.StopOpacity
export type Stroke = Property.Stroke
export type StrokeDasharray = Property.StrokeDasharray
export type StrokeDashoffset = Property.StrokeDashoffset
export type StrokeLinecap = Property.StrokeLinecap
export type StrokeLinejoin = Property.StrokeLinejoin
export type StrokeMiterlimit = Property.StrokeMiterlimit
export type StrokeOpacity = Property.StrokeOpacity
export type StrokeWidth = Property.StrokeWidth
export type TextAnchor = Property.TextAnchor
export type TextDecoration = Property.TextDecoration
export type TextRendering = Property.TextRendering
export type Transform = Property.Transform
export type UnicodeBidi = Property.UnicodeBidi
export type VectorEffect = Property.VectorEffect
export type Visibility = Property.Visibility
export type WordSpacing = Property.WordSpacing
/**
 * Specifies whether the initial inline-progression-direction for a `<text>` element shall be:
 * - *left-to-right*
 * - *right-to-left*
 * - *top-to-bottom*
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/writing-mode
 */
// FIXME: mdn vs csstype
export type WritingMode = Property.WritingMode
