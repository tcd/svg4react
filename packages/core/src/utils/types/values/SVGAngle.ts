export const AngleUnits = <const>{
    degrees:  "deg",
    radians:  "rad",
    gradians: "grad",
}
export type AngleUnitName = keyof typeof AngleUnits
export type AngleUnit = typeof AngleUnits[AngleUnitName]

/**
 * If no units are provided, they default to degrees.
 *
 * @see [MDN Web Docs - SVGAngle](https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle)
 * @see [SVG2 - InterfaceSVGAngle](https://svgwg.org/svg2-draft/types.html#InterfaceSVGAngle)
 */
export type SVGAngle = number | `${number}` | `${number}${AngleUnit}`
