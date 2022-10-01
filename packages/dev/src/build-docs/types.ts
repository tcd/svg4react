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
