/* eslint-disable no-console */
import { InterfacePropertyParser, ProjectParser, ReferenceTypeParser } from "typedoc-json-parser"

import type { PropData } from "./types.js"

export const parseProp = (project: ProjectParser, propParam: InterfacePropertyParser) => {
    const result: PropData = {}

    // =========================================================================
    // Name
    // =========================================================================

    result.name = propParam.name

    // =========================================================================
    // Description
    // =========================================================================

    const commentSegments = [
        propParam.comment.description,
    ]

    for (const segment of propParam?.comment?.blockTags ?? []) {
        if (segment.name === "see") {
            commentSegments.push(`[see ${segment.text}](${segment.text})`)
        }
    }

    result.description = commentSegments.join("\n\n")

    // =========================================================================
    // Type
    // =========================================================================

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
