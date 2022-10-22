import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"
import { writeJsonFile } from "write-json-file"

import { packagePathWindows } from "../../helpers/paths-windows.js"
import { gatherComponentData } from "./helpers/index.js"

const components: Svg4ReactComponent[] = [
    "Animate",
    "AnimateMotion",
    "AnimateTransform",
    "Circle",
    "ClipPath",
    "Defs",
    "Ellipse",
    "ForeignObject",
    "G",
    "Line",
    "LinearGradient",
    "Marker",
    "Mask",
    "MPath",
    "Path",
    "Pattern",
    "Polygon",
    "Polyline",
    "RadialGradient",
    "Rect",
    "Stop",
    "Svg",
    "Symbol",
    "Text",
    "TextPath",
    "TSpan",
    "Use",
]

const main = async (): Promise<void> => {
    const inputPath  = packagePathWindows("core", ["tmp", "svg4react.d.json"])
    const outputPath = packagePathWindows("docs", ["src", "data", "components.json"])

    const inputString = await readFile(inputPath, { encoding: "utf-8" })
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
