import type { ProjectParser } from "typedoc-json-parser"

export const parseReferenceType = (project: ProjectParser, reflection: any): any => {

    let result: any = {}

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

    return result?.type
}

// =============================================================================
// Type Parsers
// =============================================================================

const parseReference = (project: ProjectParser, prop): any => {
    if (prop?.type?.id) {
        const referenced = project.find(prop.type.id)
        if (referenced) {
            debugger
            return parseReferenceType(project, referenced).type
        }
    } else {
        console.error("unhandled reference")
        debugger
    }
    return [prop.type.package, prop.type.name].join(".")
    // return [prop.package, prop.qualifiedName].join(".")

    // return referenced
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

