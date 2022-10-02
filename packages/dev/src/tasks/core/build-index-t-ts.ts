import { readFile, writeFile } from "fs/promises"
import { join } from "path"

import { PACKAGE_PATHS } from "../../helpers/index.js"

const header = `
// =============================================================================
// This is a programmatically generated file; do not edit it manually
// =============================================================================
`.trim()

const main = async () => {
    const inputPath = join(PACKAGE_PATHS.core, "src", "index.ts")
    const outputPath = join(PACKAGE_PATHS.core, "src", "index.d.ts")
    const inputContent = (await readFile(inputPath, { encoding: "utf8" })).toString()
    const outputContent = [header, inputContent].join("\n\n")
    await writeFile(outputPath, outputContent)
    console.log(`file written: ${outputPath}`)
}

try {
    await main()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}
