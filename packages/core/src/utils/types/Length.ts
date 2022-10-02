/**
 * @public
 *
 * @see [MDN Web Docs - `length`](https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#length)
 * @see [MDN Web Docs - `SVGLength`](https://developer.mozilla.org/en-US/docs/Web/API/SVGLength)
 * @see [MDN Web Docs - `SVGAnimatedLength`](https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedLength)
 * @see [MDN Web Docs - `coordinate`](https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#coordinate)
 */
export type Unit =
    | "em"
    | "ex"
    | "px"
    | "in"
    | "cm"
    | "mm"
    | "pt"
    | "pc"
    | "%"

/**
 * @public
 *
 * A `length` is a distance measurement, given as a number along with a unit. Lengths are specified in one of two ways.
 *
 * @see [MDN Web Docs - `length`](https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#length)
 * @see [MDN Web Docs - `SVGLength`](https://developer.mozilla.org/en-US/docs/Web/API/SVGLength)
 * @see [MDN Web Docs - `SVGAnimatedLength`](https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedLength)
 * @see [MDN Web Docs - `coordinate`](https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#coordinate)
 */
export type Length = number | `${number}${Unit}`
