/* eslint-disable no-console */
import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"
import { writeJsonFile } from "write-json-file"

import { PACKAGE_PATHS, packagePath } from "../helpers/paths-windows.js"
import { parseProp } from "./parse-prop.js"
// import type { ComponentData } from "./types.js"
// import { gatherComponentData } from "./gather-component-data.js"

const main = async () => {
    const inputPath = packagePath("core", ["tmp", "svg4react.d.json"])
    const outputPath = packagePath("dev", ["tmp", "LinearGradientAttributes.json"])
    // console.log(inputPath)
    const inputString = await readFile(inputPath)
    // @ts-ignore: next-line
    const inputData = JSON.parse(inputString)
    // console.log(input)

    const project = new ProjectParser({ data: inputData })

    const attributes = []

    // const attrData = project.interfaces.find(x => x.name === "_LinearGradientAttributes")
    const attrData = project.find(116)

    // @ts-ignore: next-line
    for (const attr of attrData.properties) {
        attributes.push(parseProp(project, attr))
    }

    await writeJsonFile(outputPath, attributes)
    console.log(`${outputPath} written`)
}

try {
    await main()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}
