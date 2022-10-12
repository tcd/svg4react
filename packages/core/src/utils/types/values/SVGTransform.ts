import type { SVGAngle } from "./SVGAngle"

export namespace TransformArgs {
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#matrix)
     */
    export type Matrix = [
        a: any,
        b: any,
        c: any,
        d: any,
        e: any,
        f: any,
    ]
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#translate)
     */
    export type Translate = [tx: number, ty?: number]
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#scale)
     */
    export type Scale = [sx: number, sy?: number]
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#rotate)
     */
    export type Rotate = [angle: SVGAngle] | [angle: SVGAngle, cx: number, cy: number]
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#skewx)
     */
    export type SkewX = [angle: SVGAngle]
    /**
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#skewy)
     */
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
export type TSVGTransform<Type extends TransformType, Args> = [
    transformType: Type,
    args: Args,
]

/**
 * @see [MDN Web Docs - SVG Attribute reference - `transform`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
 * @see [SVG2 - SVGTransform](https://svgwg.org/svg2-draft/coords.html#InterfaceSVGTransform)
 */
export type SVGTransform =
    | TSVGTransform<"matrix",    TransformArgs.Matrix>
    | TSVGTransform<"translate", TransformArgs.Translate>
    | TSVGTransform<"scale",     TransformArgs.Scale>
    | TSVGTransform<"rotate",    TransformArgs.Rotate>
    | TSVGTransform<"skewX",     TransformArgs.SkewX>
    | TSVGTransform<"skewY",     TransformArgs.SkewY>
