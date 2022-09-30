/* eslint-disable no-console */

import { posix } from "path"
// import { globby } from "globby"
import { deleteAsync } from "del"
import { moveFile } from "move-file"

// const cwd = process.cwd().replaceAll("\\\\", "/")

// const globs = [
//     posix.join(".", "dist", "**", "*.d.ts") ,
//     // "*",
//     // "!cake",
// ]
// console.log(globs)

// const paths = await globby(globs)
// console.log(paths)

const main = async () => {
    let _deleted = []
    const dryRun = false

    _deleted = await deleteAsync([posix.join(".", "dist", "**", "*.d.ts")], { dryRun })
    if (dryRun) { console.log(_deleted) }
    console.log("dist/**/*.d.ts files deleted")
    _deleted = await deleteAsync([posix.join(".", "dist", "**", "*.d.ts.map")], { dryRun })
    if (dryRun) { console.log(_deleted) }
    console.log("dist/**/*.d.ts.map files deleted")
    if (!dryRun) {
        await moveFile("./tmp/svg4react.d.ts", "./dist/index.d.ts")
        console.log("svg4react.d.ts moved to dist/index.d.ts")
    }
}

try {
    await main()
    process.exit(0)
} catch (e) {
    console.error(e)
    process.exit(1)
}
