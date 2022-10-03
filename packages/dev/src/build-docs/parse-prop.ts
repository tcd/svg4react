import { ProjectParser } from "typedoc-json-parser"
import type * as parser from "typedoc-json-parser"

export const parseProp = (project: ProjectParser, propParam: parser.InterfacePropertyParser) => {
    const result: PropData = {}

    // =========================================================================
    // Name
    // =========================================================================

    result.name = propParam.name

    // =========================================================================
    // Description (links, defaultValue)
    // =========================================================================

    const commentSegments = [
        propParam.comment.description,
    ]

    for (const segment of propParam?.comment?.blockTags ?? []) {

        if (segment.name === "see") {
            if (segment.text.startsWith("[")) {
                commentSegments.push(segment.text)
            } else {
                commentSegments.push(`[see ${segment.text}](${segment.text})`)
            }
        }

        if (segment.name === "defaultValue" || segment.name === "default") {
            result.default = segment.text
        }
    }

    result.description = commentSegments.join("\n\n")

    // =========================================================================
    // Type
    // =========================================================================

    switch (propParam.type.kind) {
        case "intrinsic":
            // console.log("intrinsic")
            result.type = propParam.type.kind
            break
        case "union":
            // console.log("union")
            result.type = parseUnion(propParam)
            break

        case "reference":
            console.log("reference")
            // result.push(parseReference(project, propParam as ReferenceTypeParser))
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

export const parseReference = (project: ProjectParser, propType: parser.ReferenceTypeParser): any => {
    const referenced = project.find(propType.id)

    return referenced
}

export const parseUnion = (prop: parser.InterfacePropertyParser): string => {
    // @ts-ignore: next-line
    if (prop.type.types.every(x => x.kind === "intrinsic")) {
        // @ts-ignore: next-line
        return prop.type.types.map(x => x?.type).join(" | ")
    }

    // @ts-ignore: next-line
    if (prop.type.types.every(x => x.kind === "literal")) {
        // @ts-ignore: next-line
        return prop.type.types.map(x => `"${x?.type}"`).join(" | ")
    }

    return "[parseUnion] Unhandled"
}
