import { ProjectParser } from "typedoc-json-parser"
import type * as parser from "typedoc-json-parser"

export const parseInterfaceProperty = (project: ProjectParser, propParam: parser.InterfacePropertyParser): PropData => {
    console.log(propParam)
    // @ts-ignore: next-line
    return propParam
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
            // @ts-ignore: next-line
            result.type = propParam.type.type
            break
        case "union":
            // console.log("union")
            result.type = parseUnion(propParam)
            break

        case "reference":
            console.log("reference")
            // result.type = parseReference(project, propParam as unknown as parser.ReferenceTypeParser)
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

// =============================================================================
// Type Parsers
// =============================================================================

const parseReference = (project: ProjectParser, propType: parser.ReferenceTypeParser): any => {
    const referenced = project.find(propType.id)

    return referenced
}

const parseUnion = (prop: parser.InterfacePropertyParser): string => {
    // @ts-ignore: next-line
    // const types = prop.type.toJSON().types
    const types = prop.type.types
    // console.log(types)
    // @ts-ignore: next-line
    if (types.every(x => x.kind === "intrinsic")) {
        // @ts-ignore: next-line
        return types.map(x => x?.type).join(" | ")
    }

    // @ts-ignore: next-line
    if (types.every(x => x.kind === "literal")) {
        // @ts-ignore: next-line
        return types.map(x => `"${x?.value}"`).join(" | ")
    }

    return "[parseUnion] Unhandled"
}

