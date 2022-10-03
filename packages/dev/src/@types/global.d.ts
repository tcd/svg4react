export declare global {
    /** A name of a package in the repo */
    export type PackageName =
        | "core"
        | "dev"
        | "docs"

    export interface PropData {
        name?: string
        type?: string
        default?: string
        description?: string
    }

    export interface ComponentData {
        component?: string
        docComment?: string
        props?: PropData[]
    }
}
