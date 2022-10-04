import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"
import { writeJsonFile } from "write-json-file"
// import type * as parser from "typedoc-json-parser"

import { packagePath } from "../../helpers/paths-windows.js"
import { parseReflectionChild } from "./helpers/parse-parser/parse-reflection-child.js"
// import { gatherComponentData } from "./gather-component-data.js"

const propTypeMap: Partial<Record<Svg4ReactComponent, string>> = {
    "LinearGradient": "_LinearGradientAttributes",
    "Ellipse":        "_EllipseAttributes",
}

const main = async (): Promise<void> => {
    const inputPath  = packagePath("core", ["tmp", "svg4react.d.json"])
    const outputPath = packagePath("dev", ["tmp", "props.json"])
    const inputString = await readFile(inputPath)
    // @ts-ignore: next-line
    const inputData = JSON.parse(inputString)
    // console.log(input)

    const project = new ProjectParser({ data: inputData })

    const allProps: any = {}

    for (const [component, propTypeName] of Object.entries(propTypeMap)) {
        const attributes = []

        const propType = project.typeAliases.find(x => x.name === propTypeName)
        if (propType.type.kind !== "reflection") {
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
