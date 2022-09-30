/* eslint-disable no-console */
import { join } from "path"
import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"
import { writeJsonFile } from "write-json-file"


import { PACKAGE_PATHS } from "./helpers/index.js"

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
    const inputPath = join(PACKAGE_PATHS.core, "tmp", "svg4react.d.json")
    const outputPath = join(PACKAGE_PATHS.docs, "src", "data", "components.json")
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

    await writeJsonFile(outputPath, componentDocs)
    console.log(`${outputPath} written`)

    // console.log(componentDocs)

    // const svg = input.find((x: any) => x.name ==="Svg" )
}

try {
    await main()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}

