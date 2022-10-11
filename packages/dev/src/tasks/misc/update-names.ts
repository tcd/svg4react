import { readFile, writeFile } from "fs/promises"

import { packagePathWindows } from "../../helpers/paths-windows.js"

const main = async (): Promise<void> => {
    const inputPath  = packagePathWindows("core", ["tmp", "svg4react.d.json"])
    const outputPath = packagePathWindows("dev", ["tmp", "props.json"])
}

try {
    await main()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}
