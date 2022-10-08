import { fileURLToPath } from "url"
import { dirname, resolve, join } from "path/posix"

const _dirname = dirname(fileURLToPath(import.meta.url))

export const POSIX_MONOREPO_ROOT = resolve(_dirname, "..", "..", "..", "..")

export const POSIX_PACKAGE_PATHS: Record<PackageName, string> = {
    core: join(POSIX_MONOREPO_ROOT, "packages", "core"),
    dev:  join(POSIX_MONOREPO_ROOT, "packages", "dev"),
    docs: join(POSIX_MONOREPO_ROOT, "packages", "docs"),
}

export const posixPackagePath = (packageName: PackageName, paths: string[]): string => {
    return join(POSIX_PACKAGE_PATHS[packageName], ...paths)
}
