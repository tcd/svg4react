import { ProjectParser } from "typedoc-json-parser"
import type * as parser from "typedoc-json-parser"

export const gatherPropsData = (project: ProjectParser, propParam: parser.ParameterParser): PropData[] => {
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

const parseReference = (project: ProjectParser, propType: parser.ReferenceTypeParser): any => {
    const referenced = project.find(propType.id)

    return referenced
}
