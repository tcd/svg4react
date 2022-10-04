import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"
import { writeJsonFile } from "write-json-file"

import { packagePath } from "../../helpers/paths-windows.js"
import { gatherComponentData } from "./helpers/index.js"

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
    "Polygon",
    "Rect",
    "Stop",
    "Svg",
    "Use",
]

const main = async (): Promise<void> => {
    const inputPath  = packagePath("core", ["tmp", "svg4react.d.json"])
    const outputPath = packagePath("docs", ["src", "data", "components.json"])
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