import { join } from "path/posix"
import { rename } from "fs/promises"

import { deleteAsync } from "del"

import { PACKAGE_PATHS } from "../../helpers/index.js"

const main = async (): Promise<void> => {

    let _deleted = []
    const dryRun = false
    const coreRoot = PACKAGE_PATHS.core
    console.log({ cwd: process.cwd() })

    if (process.cwd() != coreRoot) {
        process.chdir(coreRoot)
    }

    console.log({ cwd: process.cwd() })

    const toDelete = {
        "dist/**/*.d.ts":     join("dist", "**", "*.d.ts"),
        "dist/**/*.d.ts.map": join("dist", "**", "*.d.ts.map"),
    }

    for (const [name, files] of Object.entries(toDelete)) {
        _deleted = await deleteAsync(files, { dryRun, expandDirectories: true })
        if (dryRun) { console.log(_deleted) }
        console.log(`${name} files deleted`)
    }

    if (!dryRun) {
        const from = join("tmp",  "svg4react.d.ts")
        const to   = join("dist", "index.d.ts")
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
