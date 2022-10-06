import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"
import { writeJsonFile } from "write-json-file"
// import type * as parser from "typedoc-json-parser"

import { packagePath } from "../../helpers/paths-windows.js"
import { parseReflectionChild } from "./helpers/parse-parser/parse-reflection-child.js"

const propTypeMap: Partial<Record<Svg4ReactComponent, string>> = {
    "Ellipse":        "_EllipseAttributes",
    "Text":           "_TextAttributes",

    // "Line":           "_LineAttributes",
    // "LinearGradient": "_LinearGradientAttributes",
    // "Polygon":        "_PolygonAttributes",
    // "Polyline":       "_PolylineAttributes",
    // "RadialGradient": "_RadialGradientAttributes",
    // "Rect":           "__RectAttributes",
    // "Stop":           "StopAttributes",
    // "Svg":            "_SvgAttributes",
}

const main = async (): Promise<void> => {
    const inputPath  = packagePath("core", ["tmp", "svg4react.d.json"])
    const outputPath = packagePath("dev", ["tmp", "props.json"])

    const inputString = await readFile(inputPath, { encoding: "utf-8" })
    const inputData = JSON.parse(inputString)
    // console.log(input)

    const project = new ProjectParser({ data: inputData })

    const allProps: any = {}

    for (const [component, propTypeName] of Object.entries(propTypeMap)) {
        const attributes = []

        const propType = project.typeAliases.find(x => x.name === propTypeName)
        if (propType?.type?.kind !== "reflection") {
            console.error(`not a reflection: ${propType}`)
            process.exit(1)
        }

        // @ts-ignore: next-line
        for (const attr of propType.type.reflection.children) {
            attributes.push(parseReflectionChild(project, attr))
        }

        allProps[component] = attributes
    }

    await writeJsonFile(outputPath, allProps)
    console.log(`${outputPath} written`)
}

try {
    await main()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}
