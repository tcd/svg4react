import type { SVGProps } from "react"
import type { CommonSvgPresentationAttributes, DrawCommand } from "../utils"

export type _TextPathAttributes = {
    /**
     * Alternative syntax for building the value of the `path` prop.
     *
     * **Will** overwrite the `path` prop.
     *
     * @shorthand d
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
     *
     * @default "spacing"
     */
    lengthAdjust?: "spacing" | "spacingAndGlyphs"
    /**
     *
     *
     * @default "align"
     */
    method?: "align" | "stretch"
    /**
     * Which side of the path the text should be rendered.
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


export type TextPathAttributes = _TextPathAttributes & CommonSvgPresentationAttributes

/**
 * @see [MDN Web Docs - `<textPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath)
 */
export type TextPathProps =
    Omit<SVGProps<SVGTextPathElement>, keyof TextPathAttributes>
    & TextPathAttributes
