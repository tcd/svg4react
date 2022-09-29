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

try {
    await deleteAsync([posix.join(".", "dist", "**", "*.d.ts")], { dryRun: false })
    console.log("dist/**/*.d.ts files deleted")
    await deleteAsync([posix.join(".", "dist", "**", "*.d.ts.map")], { dryRun: false })
    console.log("dist/**/*.d.ts.map files deleted")
    await moveFile("./tmp/svg4react.d.ts", "./dist/index.d.ts")
    console.log("svg4react.d.ts moved to dist/index.d.ts")
    process.exit(0)
} catch (e) {
    console.error(e)
    process.exit(1)
}
