import { fileURLToPath } from "url"
import { dirname, resolve, join } from "path/win32"

const _dirname = dirname(fileURLToPath(import.meta.url))

export const WINDOWS_MONOREPO_ROOT = resolve(_dirname, "..", "..", "..", "..")

export const WINDOWS_PACKAGE_PATHS: Record<PackageName, string> = {
    core: join(WINDOWS_MONOREPO_ROOT, "packages", "core"),
    dev:  join(WINDOWS_MONOREPO_ROOT, "packages", "dev"),
    docs: join(WINDOWS_MONOREPO_ROOT, "packages", "docs"),
}

export const packagePathWindows = (packageName: PackageName, paths: string[]): string => {
    return join(WINDOWS_PACKAGE_PATHS[packageName], ...paths)
}
