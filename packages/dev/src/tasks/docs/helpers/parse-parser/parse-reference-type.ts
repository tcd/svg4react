import { paramCase } from "change-case"
import type { ProjectParser } from "typedoc-json-parser"

export type ReflectionKind =
    | "intrinsic"
    | "union"
    | "tuple"
    | "reference"
    | "intersection"

export const parseReferenceType = (project: ProjectParser, reflection: any): any => {
    try {
        let result: any = {}

        let t: any

        if (reflection?.type?.type) {
            t = reflection.type.type
        } else if (reflection?.type?.kind) {
            t = reflection.type.kind
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

            case "intersection":
                console.log("intersection")
                break
            default:
                console.warn(`unable to handle propData of kind ${reflection.type.kind}`)
                break
        }

        return result?.type
    } catch (error) {
        debugger
        throw error
    }
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
    try {
        let elements = prop?.type?.elements

        if (elements?.every(x => paramCase(x?.kind ?? x?.type ?? "") === "named-tuple-member")) {
            const members = elements.map(x => [
                x.name,
                (x.isOptional ? "?: " : ": "),
                x.element?.name ?? x.element?.value,
            ].join("")).join(", ")
            return `[${members}]`
        }

        elements = prop?.type?.types

        if (elements?.every(x => paramCase(x?.kind ?? x?.type ?? "") === "named-tuple-member")) {
            const members = []
            for (const y of elements) {
                debugger
                if (y.element?.type?.toString()) {
                    members.push(y.element?.type?.toString())
                } else {
                    members.push([
                        y.name,
                        (y.isOptional ? "?: " : ": "),
                        y.element?.name ?? y.element?.value ?? y.element?.type?.toString(),
                    ].join(""))
                }
            }
            return members.join(", ")
            // const members = elements.map(x => [
            //     x.name,
            //     (x.isOptional ? "?: " : ": "),
            //     x.element?.name ?? x.element?.value ?? x.element?.type,
            // ].join("")).join(", ")
            // return `[${members}]`
        }



        return "[parseTuple] Unhandled"
    } catch (error) {
        debugger
        throw error
    }
}

