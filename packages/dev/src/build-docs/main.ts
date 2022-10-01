/* eslint-disable no-console */
import { join } from "path"
import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"
import { writeJsonFile } from "write-json-file"

import { PACKAGE_PATHS } from "../helpers/index.js"
import type { ComponentData } from "./types.js"
import { gatherComponentData } from "./helpers.js"

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

const main = async () => {
    const inputPath = join(PACKAGE_PATHS.core, "tmp", "svg4react.d.json")
    const outputPath = join(PACKAGE_PATHS.docs, "src", "data", "components.json")
    // console.log(inputPath)
    const inputString = await readFile(inputPath)
    // @ts-ignore: next-line
    const inputData = JSON.parse(inputString)
    // console.log(input)

    const project = new ProjectParser({ data: inputData })

    const componentDocs: ComponentData[] = []

    for (const component of components) {
        const componentData = gatherComponentData(project, component)
        componentDocs.push(componentData)
    }

    await writeJsonFile(outputPath, componentDocs)
    console.log(`${outputPath} written`)
}

try {
    await main()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}
