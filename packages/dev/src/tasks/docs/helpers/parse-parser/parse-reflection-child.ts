import { ProjectParser } from "typedoc-json-parser"
import { parseReferenceType } from "./parse-reference-type.js"
// import type * as parser from "typedoc-json-parser"

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
        // `@default` / `@defaultValue`
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

    // debugger
    // =========================================================================
    // Type
    // =========================================================================
    let t: any

    if (reflection?.type?.type) {
        t = reflection.type.type
    } else {
        debugger
    }

    switch (t) {
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
        case "array":
            result.type = parseArray(reflection)
            break

        case "intersection":
            console.log("intersection")
            break
        default:
            console.warn(`unable to handle propData of kind ${reflection.type.type}`)
            break
    }

    // @ts-ignore: next-line
    return result
}

// =============================================================================
// Type Parsers
// =============================================================================

const parseReference = (project: ProjectParser, prop): any => {
    if (prop?.type?.id) {
        const referenced = project.find(prop.type.id)
        if (referenced) {
            if (referenced?.project?.name === "svg4react") {
                // @ts-ignore: next-line
                console.log(`internal reference: '${referenced.type.toString()}'`)
                // debugger
            }
            return parseReferenceType(project, referenced)
        }
    } else if (prop?.type?.package && prop?.type?.name) {
        return [prop.type.package, prop.type.name].join(".")
    } else {
        console.error(`unhandled reference: '${prop.name}'`)
        debugger
    }
    return [prop.type.package, prop.type.name].join(".")
    // return [prop.package, prop.qualifiedName].join(".")

    // return referenced
}

// =============================================================================

const parseUnion = (prop: any): string => {
    const types = prop.type.types

    // if (types.every(x => x.kind === "intrinsic")) {
    //     return types.map(x => x?.type).join(" | ")
    // }

    const formattedTypes = types.map(x => {
        if (x.type === "literal") {
            return `"${x?.value ?? x?.name}"`
        }
        if (x.type === "intrinsic") {
            return `${x?.value ?? x?.name}`
        }
        return "[parseUnion] unhandled type"
    })

    return formattedTypes.join(" | ")

//     if (types.every(x => x.type === "literal")) {
//         return types.map(x => `"${x?.value ?? x?.name}"`).join(" | ")
//     }
//
//     if (types.every(x => x.type === "intrinsic")) {
//         return types.map(x => `${x?.value ?? x?.name}`).join(" | ")
//     }
//
//     debugger
//
//     try {
//         return `[parseUnion] Unhandled: ${prop?.toJSON() ?? prop}`
//     } catch (error) {
//         return `[parseUnion] Unhandled: ${prop}`
//     }
}

// =============================================================================

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

// =============================================================================

const parseArray = (prop: any): string => {
    // const x = prop.type.elementType.name
    // debugger
    try {
        return `${prop.type.elementType.name}[]`
    } catch (e) {
        console.error("error parsing array type", e)
        debugger
        return "[parseArray] Unhandled"
    }
}
