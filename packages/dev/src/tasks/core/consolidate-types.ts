// import { globby } from "globby"
import { deleteAsync } from "del"
import { rename } from "fs/promises"
import rimraf from "rimraf"
// import rimraf from "rimraf"

import { packagePath as packagePathPosix } from "../../helpers/paths-posix.js"
import { packagePath as packagePathWindows } from "../../helpers/paths-windows.js"

// const cwd = process.cwd().replaceAll("\\\\", "/")

// const globs = [
//     posix.join(".", "dist", "**", "*.d.ts") ,
//     // "*",
//     // "!cake",
// ]
// console.log(globs)

// const paths = await globby(globs)
// console.log(paths)

const main = async (): Promise<void> => {

    let _deleted = []
    const dryRun = false

    const toDelete = {
        "dist/**/*.d.ts": packagePathWindows("core", ["dist", "**", "*.d.ts"]),
        "dist/**/*.d.ts.map": packagePathWindows("core", ["dist", "**", "*.d.ts.map"]),
    }

    for (const [name, files] of Object.entries(toDelete)) {
        await rimraf(files, {}, (error: Error) => { console.error(error) })
        // if (dryRun) { console.log(_deleted) }
        // console.log(`${name} files deleted`)
    }

    if (!dryRun) {
        const from = packagePathWindows("core", ["tmp",  "svg4react.d.ts"])
        const to   = packagePathWindows("core", ["dist", "index.d.ts"])
        await rename(from, to)
        console.log(`${from} moved to ${to}`)
    }
}

try {
    await main()
    process.exit(0)
} catch (e) {
    console.error(e)
    process.exit(1)
}
