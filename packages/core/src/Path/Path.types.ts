import type { ISVGProps, CommonSVGAttributes, DrawCommand, MarkerAttachAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
 */
export type PathAttributes = {
    /**
     * Alternative syntax for building the value of the `d` prop.
     *
     * **Will** overwrite the `d` prop.
     *
     * @shorthand d
     */
    commands?: DrawCommand[]
    /**
     * Defines the path to be drawn.
     */
    d?: string
}

/**
 * @see [MDN Web Docs - `<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
 */
export type PathProps =
    ISVGProps<SVGPathElement>
    & PathAttributes
    & CommonSVGAttributes
    & MarkerAttachAttributes
