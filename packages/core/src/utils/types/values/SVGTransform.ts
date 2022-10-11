import type { SVGAngle } from "./SVGAngle"

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TransformArgs {
    export type Translate = [tx: number, ty: number]
    export type Scale = [sx: number, sy: number]
    export type Rotate = [angle: SVGAngle, cx: number, cy: number]
    export type SkewX = [angle: SVGAngle]
    export type SkewY = [angle: SVGAngle]
}

export type TransformType =
    | "matrix"
    | "translate"
    | "scale"
    | "rotate"
    | "skewX"
    | "skewY"

/**
 * @see [MDN Web Docs - SVG Attribute reference - `transform`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
 * @see [SVG2 - SVGTransform](https://svgwg.org/svg2-draft/coords.html#InterfaceSVGTransform)
 */
export type SVGTransform = "TODO: define SVGTransform"
