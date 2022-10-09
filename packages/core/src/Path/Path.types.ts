import type { SVGProps } from "react"
import type { CommonSVGPresentationAttributes, DrawCommand } from "../utils"

/**
 * @public
 *
 * @see [MDN Web Docs - `<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
 */
export type _PathAttributes = {
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
 * @public
 *
 * @see [MDN Web Docs - `<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
 */
export type PathAttributes = _PathAttributes & CommonSVGPresentationAttributes

/**
 * @public
 *
 * @see [MDN Web Docs - `<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
 */
export type PathProps =
    Omit<SVGProps<SVGPathElement>, keyof PathAttributes>
    & PathAttributes
