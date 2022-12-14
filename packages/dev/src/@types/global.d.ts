export declare global {
    /** A name of a package in the repo */
    export type PackageName =
        | "core"
        | "dev"
        | "docs"

    export interface PropData {
        name?: string
        type?: string
        required?: boolean
        default?: string
        description?: string
        shorthand?: string[]
    }

    export interface ComponentData {
        component?: string
        docComment?: string
        props?: PropData[]
    }

    export type Svg4ReactComponent =
        | "Animate"
        | "AnimateMotion"
        | "AnimateTransform"
        | "Circle"
        | "ClipPath"
        | "Defs"
        | "Ellipse"
        | "ForeignObject"
        | "G"
        | "Line"
        | "LinearGradient"
        | "Marker"
        | "Mask"
        | "MPath"
        | "Path"
        | "Polygon"
        | "Polyline"
        | "RadialGradient"
        | "Rect"
        | "Stop"
        | "Svg"
        | "Symbol"
        | "Text"
        | "TextPath"
        | "TSpan"
        | "Use"
}
