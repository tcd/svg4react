/* eslint-disable no-console */
import { join } from "path"
import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"


import { MONOREPO_ROOT } from "./monorepo-root.js"


// =============================================================================
// typedoc
// =============================================================================

// /**
//  * @see https://github.com/TypeStrong/typedoc/blob/7ceda7b96651441924c6fd2f1476fec77da7099e/src/lib/converter/comments/lexer.ts
//  */
// export const TokenSyntaxKind = {
//     Text: "text",
//     NewLine: "new_line",
//     OpenBrace: "open_brace",
//     CloseBrace: "close_brace",
//     Tag: "tag",
//     Code: "code",
//     TypeAnnotation: "type",
// }

const components = [
    "Animate",
    "AnimateMotion",
    "AnimateTransform",
    "Circle",
    "Defs",
    "Ellipse",
    "G",
    "Line",
    "LinearGradient",
    "Path",
    "Polyline",
    "Rect",
    "Stop",
    "Svg",
]

// =============================================================================
// Main
// =============================================================================

const main = async () => {
    const inputPath = join(MONOREPO_ROOT, "packages", "core", "tmp", "svg4react.d.json")
    // console.log(inputPath)
    const inputString = await readFile(inputPath)
    // @ts-ignore: next-line
    const data = JSON.parse(inputString)
    // console.log(input)

    const project = new ProjectParser({ data })

    const componentDocs = []

    for (const component of components) {
        const componentData = project.functions.find((x) => x.name === component)
        const docComment = componentData.signatures[0].comment.description ?? ""
        componentDocs.push({
            component,
            docComment,
        })
    }

    console.log(componentDocs)

    // const svg = input.find((x: any) => x.name ==="Svg" )
}

try {
    await main()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}

