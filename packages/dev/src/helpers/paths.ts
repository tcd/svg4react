import { fileURLToPath } from "url"
import { dirname, resolve, join, relative } from "path"

const _dirname = dirname(fileURLToPath(import.meta.url))

export const MONOREPO_ROOT = resolve(_dirname, "..", "..", "..", "..")

export const PACKAGE_PATHS: Record<PackageName, string> = {
    core: join(MONOREPO_ROOT, "packages", "core"),
    dev:  join(MONOREPO_ROOT, "packages", "dev"),
    docs: join(MONOREPO_ROOT, "packages", "docs"),
}

export const packagePath = (packageName: PackageName, paths: string[]): string => {
    const targetPath = join(PACKAGE_PATHS[packageName], ...paths)
    const cwd = process.cwd()
    const relativePath = relative(cwd, targetPath)
    return relativePath
}

export const packagePathRelative = (packageName: PackageName, paths: string[]): string => {
    const targetPath = join(PACKAGE_PATHS[packageName], ...paths)
    const cwd = process.cwd()
    const relativePath = relative(cwd, targetPath)
    debugger
    if (resolve(relativePath) === cwd) {
        return cwd
    } else {
        return relativePath
    }
}
