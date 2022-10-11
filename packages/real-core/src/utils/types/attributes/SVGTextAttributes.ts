import type { Property } from "csstype"

/**
 * Used by:
 *
 * - `Text`
 * - `TextPath`
 * - `TSpan`
 */
export interface SVGTextAttributes {
    /**
     * Specifies how an object is aligned along the font baseline with respect to its parent.
     *
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline)
     */
    alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "top" | "center" | "bottom"
    /**
     * NOTE: [going to be deprecated](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift)
     *
     * Allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift)
     */
    baselineShift?: Property.BaselineShift
    /**
     * Specifies the base writing direction of text.
     *
     * @default "ltr"
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction)
     */
    direction?: Property.Direction
    /**
     * Defines the baseline used to align the box's text and inline-level contents.
     *
     * @animatable discrete
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline)
     */
    dominantBaseline?: Property.DominantBaseline
    /**
     * Indicates which font family will be used to render the text, specified as a prioritized list of font family names and/or generic family names.
     *
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-family)
     */
    fontFamily?: Property.FontFamily
    /**
     * Refers to the size of the font from [baseline](https://developer.mozilla.org/en-US/docs/Glossary/baseline) to baseline when multiple lines of text are set solid in a multiline layout environment.
     *
     * @default "medium"
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size)
     */
    fontSize?: Property.FontSize
    // fontSizeAdjust?: Property.FontSizeAdjust
    // fontStretch?: Property.FontStretch
    /**
     * Specifies whether the text is to be rendered using a normal, italic, or oblique face.
     *
     * @default "normal"
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-style)
     */
    fontStyle?: Property.FontStyle
    /**
     * Indicates whether the text is to be rendered using variations of the font's glyphs.
     *
     * @default "normal"
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-variant)
     */
    fontVariant?: Property.FontVariant
    /**
     * Refers to the boldness or lightness of the glyphs used to render the text, relative to other fonts in the same font family.
     *
     * @default "normal"
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-weight)
     */
    fontWeight?: Property.FontWeight
    /**
     * How the text is stretched or compressed to fit the width defined by the `textLength` attribute.
     *
     * @default "spacing"
     * @animatable true
     * @cssProperty false
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lengthAdjust)
     */
    lengthAdjust?: "spacing" | "spacingAndGlyphs"
    /**
     * Controls spacing between text characters.
     *
     * @default "normal"
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing)
     */
    letterSpacing?: Property.LetterSpacing
    /**
     * Used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where
     * the wrapping area is determined from the [inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size)
     * property relative to a given point.
     *
     * This attribute is not applicable to other types of auto-wrapped text.
     * For those cases you should use `text-align`.
     * For multi-line text, the alignment takes place for each line.
     *
     * @default "start"
     * @animatable discrete
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)
     */
    textAnchor?: Property.TextAnchor
    /**
     * Defines whether text is decorated with an underline, overline, and/or strike-through.
     *
     * @animatable true
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-decoration)
     */
    textDecoration?: Property.TextDecoration
    /**
     * A width that the text should be scaled to fit.
     *
     * **NOTE:** This attribute is not intended for use to obtain effects such as shrinking or expanding text.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/textLength)
     * @see [SVG2](https://svgwg.org/svg2-draft/text.html#TextElementTextLengthAttribute)
     */
    textLength?: number | string
    /**
     * Specifies how the accumulation of the background image is managed.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/unicode-bidi)
     */
    unicodeBidi?: Property.UnicodeBidi
    /**
     * Specifies spacing behavior between words.
     *
     * @default "normal"
     * @animatable true
     * @cssProperty true
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
     * @default "horizontal-tb"
     * @cssProperty true
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/writing-mode)
     * @see [SVG2 - 11.10.2.3. The 'writing-mode' property](https://svgwg.org/svg2-draft/text.html#WritingModeProperty)
     */
    writingMode?: Property.WritingMode
}
