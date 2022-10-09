import type { CommonSVGPresentationAttributes, DrawCommand, ISVGProps } from "../utils"

export type TextPathAttributes = {
    /**
     * Alternative syntax for building the value of the `path` prop.
     *
     * **Will** overwrite the `path` prop.
     *
     * @shorthand d
     *
     * @experimental
     */
    commands?: DrawCommand[]
    // /**
    //  * The path on which the text should be rendered.
    //  */
    // path?: any
    /**
     * The URL to the path or basic shape on which to render the text.
     *
     * If the `path` attribute is set, `href` has no effect.
     */
    href?: string
    /**
     * Where length adjustment should be applied to the text: the space between glyphs, or both the space and the glyphs themselves.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lengthAdjust)
     *
     * @default "spacing"
     */
    lengthAdjust?: "spacing" | "spacingAndGlyphs"
    /**
     * Which method to render individual glyphs along the path.
     *
     * @experimental
     *
     * @default "align"
     */
    method?: "align" | "stretch"
    /**
     * Which side of the path the text should be rendered.
     *
     * @experimental
     *
     * @default "left"
     */
    side?: "left" | "right"
    /**
     * How space between glyphs should be handled.
     *
     * @default "exact"
     */
    spacing?: "auto" | "exact"
    /**
     * How far the beginning of the text should be offset from the beginning of the path.
     *
     * @default 0
     */
    startOffset?: string
    /**
     * The width of the space into which the text will render.
     *
     * @default "auto"
     */
    textLength?: "auto" | any
}

/**
 * @see [MDN Web Docs - `<textPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath)
 */
export type TextPathProps =
    ISVGProps<SVGTextPathElement>
    & TextPathAttributes
    & CommonSVGPresentationAttributes
