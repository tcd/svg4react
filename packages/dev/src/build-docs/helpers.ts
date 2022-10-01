/* eslint-disable no-console */
import { ProjectParser, TypeParser } from "typedoc-json-parser"

import type { PropData, ComponentData } from "./types.js"

export const gatherPropsData = (project: ProjectParser, propType: TypeParser): PropData[] => {
    const result: PropData[] = []

    switch (propType.kind) {
        case "reference":
            console.log("reference")
            break
        case "intrinsic":
            console.log("intrinsic")
            break
        case "intersection":
            console.log("intersection")
            break
        default:
            console.warn(`unable to handle propData of kind ${propType.kind}`)
            break
    }

    return result
}

export const gatherComponentData = (project: ProjectParser, component: string): ComponentData => {
    const result: ComponentData = {
        component,
        // props: [],
    }

    const componentData = project.functions.find((x) => x.name === component)
    // console.log(JSON.stringify(componentData, undefined, 4))

    // -------------------------------------------------------------------------
    // Doc Comment
    // -------------------------------------------------------------------------

    result.docComment = componentData.signatures[0].comment.description ?? ""

    // -------------------------------------------------------------------------
    // Props
    // -------------------------------------------------------------------------

    const propType = componentData.signatures[0].parameters.find(x => x.name === "props").type

    // result.props = gatherPropsData(project, propType)

    // -------------------------------------------------------------------------
    // Return result
    // -------------------------------------------------------------------------

    return result
}
