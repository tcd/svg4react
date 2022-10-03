import { readFile } from "fs/promises"
import { ProjectParser } from "typedoc-json-parser"
import { writeJsonFile } from "write-json-file"

import { packagePath } from "../../helpers/paths-windows.js"
import { parseProp } from "./helpers/index.js"
// import { gatherComponentData } from "./gather-component-data.js"

const main = async (): Promise<void> => {
    const inputPath  = packagePath("core", ["tmp", "svg4react.big.d.json"])
    const outputPath = packagePath("dev", ["tmp", "attrs.big.json"])
    const inputString = await readFile(inputPath)
    // @ts-ignore: next-line
    const inputData = JSON.parse(inputString)
    // console.log(input)

    const project = new ProjectParser({ data: inputData })

    const attributes = []

    const attrData = project.interfaces.find(x => x.name === "SvgPresentationAttributes")

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
