/* eslint-disable no-console */
import { ParameterParser, ProjectParser, ReferenceTypeParser, TypeParser } from "typedoc-json-parser"

import type { PropData } from "./types.js"

export const gatherPropsData = (project: ProjectParser, propParam: ParameterParser): PropData[] => {
    const result: PropData[] = []

    switch (propParam.type.kind) {
        case "reference":
            console.log("reference")
            // result.push(parseReference(project, propParam as ReferenceTypeParser))
            break
        case "intrinsic":
            console.log("intrinsic")
            break
        case "intersection":
            console.log("intersection")
            break
        default:
            console.warn(`unable to handle propData of kind ${propParam.type.kind}`)
            break
    }

    // @ts-ignore: next-line
    return result
}

export const parseReference = (project: ProjectParser, propType: ReferenceTypeParser): any => {
    const referenced = project.find(propType.id)

    return referenced
}
