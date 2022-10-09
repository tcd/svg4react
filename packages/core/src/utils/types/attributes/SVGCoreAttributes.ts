import type { Properties } from "csstype"
import type { AriaRole } from "react"

/**
 * React's TypeScript definitions for SVG element props dump everything into one bit bucket.
 *
 * This interface is a but more restrictive.
 *
 * @see [MDN Web Docs - SVG Core Attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Core)
 * @see [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/40d2b61ff58052ff939fe662353bb3c1baf769ec/types/react/index.d.ts#L2503)
 * @see [SVGDOMPropertyConfig.js](https://unpkg.com/browse/react-dom@15.6.2/lib/SVGDOMPropertyConfig.js)
 */
export interface SVGCoreAttributes {
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class)
     */
    className?: string
    /**
     * The color attribute is used to provide a potential indirect value, `currentcolor`, for the following attributes:
     *
     * - `fill`
     * - `stroke`
     * - `stop-color`
     * - `flood-color`
     * - `lighting-color`
     *
     * As a presentation attribute, it can be applied to any element, but as noted above, it has no direct effect on SVG elements.
     *
     * @see [SVG2 - 13.3 - The effect of the 'color' property](https://www.w3.org/TR/SVG/painting.html#ColorProperty)
     */
    color?: string
    /**
     * Defines a unique identifier (ID) which must be unique in the whole document.
     *
     * Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
     */
    id?: string
    /**
     * Specifies the primary language used in contents and attributes containing text content of particular elements.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lang)
     * @see [rfc5646 - Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646)
     */
    lang?: string
    /**
     * Aria Role
     */
    role?: AriaRole
    style?: Properties
    /**
     * Allows you to control whether an element is focusable and to define the relative order of the element for the purposes of sequential focus navigation.
     *
     * You can use this attribute with any SVG element.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/tabindex)
     */
    tabIndex?: number
}
