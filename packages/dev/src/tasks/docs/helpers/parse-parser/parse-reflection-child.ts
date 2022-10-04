import { ProjectParser } from "typedoc-json-parser"
import type * as parser from "typedoc-json-parser"

export const parseReflectionChild = (project: ProjectParser, reflection: any): PropData => {
    // // console.log(propParam)
    // // @ts-ignore: next-line
    // return propParam
    const result: PropData = {}

    // =========================================================================
    // Name
    // =========================================================================

    result.name = reflection.name

    // =========================================================================
    // Description (links, defaultValue)
    // =========================================================================

    const commentSegments = [
        reflection.comment.summary.map(x => x.text).join(""),
    ]

    for (const segment of reflection?.comment?.blockTags ?? []) {

        // ---------------------------------------------------------------------
        // `@see`
        // ---------------------------------------------------------------------

        if (segment?.tag === "@see") {
            let content = segment.content.map(x => x.text).join("")
            if (content.startsWith("[")) {
                content = "See " + content
            }
            commentSegments.push(content)
        }

        if (segment?.name === "see") {
            if (segment.text.startsWith("[")) {
                commentSegments.push(segment.text)
            } else {
                commentSegments.push(`[see ${segment.text}](${segment.text})`)
            }
        }

        // ---------------------------------------------------------------------
        // `@defaultValue`
        // ---------------------------------------------------------------------

        if (segment?.tag === "defaultValue" || segment?.tag === "default") {
            debugger
            result.default = segment.content
        }

        if (segment.name === "defaultValue" || segment.name === "default") {
            result.default = segment.text
        }
    }

    result.description = commentSegments.join("\n\n")

    // =========================================================================
    // Type
    // =========================================================================

    switch (reflection.type.type) {
        case "intrinsic":
            result.type = reflection.type.name
            break
        case "union":
            result.type = parseUnion(reflection)
            break
        case "tuple":
            result.type = parseTuple(reflection)
            break

        // FIXME: parse reference type
        case "reference":
            result.type = parseReference(project, reflection)
            break

        case "intersection":
            console.log("intersection")
            break
        default:
            console.warn(`unable to handle propData of kind ${reflection.type.kind}`)
            break
    }

    // @ts-ignore: next-line
    return result
}

// =============================================================================
// Type Parsers
// =============================================================================

const parseReference = (project: ProjectParser, prop): any => {
    debugger
    return [prop.type.package, prop.type.name].join(".")
    // return [prop.package, prop.qualifiedName].join(".")
    const referenced = project.find(prop.id)

    return referenced
}

const parseUnion = (prop: any): string => {
    const types = prop.type.types

    // if (types.every(x => x.kind === "intrinsic")) {
    //     return types.map(x => x?.type).join(" | ")
    // }

    if (types.every(x => x.type === "literal")) {
        return types.map(x => `"${x?.value ?? x?.name}"`).join(" | ")
    }

    if (types.every(x => x.type === "intrinsic")) {
        return types.map(x => `${x?.value ?? x?.name}`).join(" | ")
    }

    debugger

    return `[parseUnion] Unhandled: ${prop?.toJSON() ?? prop}`
}

const parseTuple = (prop: any): string => {
    const elements = prop.type.elements

    if (elements?.every(x => (x?.kind ?? x?.type) === "named-tuple-member")) {
        const members = elements.map(x => [
            x.name,
            (x.isOptional ? "?: " : ": "),
            x.element?.name ?? x.element?.value,
        ].join("")).join(", ")
        return `[${members}]`
    }

    return "[parseTuple] Unhandled"
}

