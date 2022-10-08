import {
    WINDOWS_MONOREPO_ROOT,
    POSIX_MONOREPO_ROOT,
    MONOREPO_ROOT,
    packagePathRelative,
} from "./helpers/index.js"

console.log({
    WINDOWS_MONOREPO_ROOT,
    POSIX_MONOREPO_ROOT,
    MONOREPO_ROOT,
})

console.log(packagePathRelative("core", ["dist", "**", "*.d.ts"]))
