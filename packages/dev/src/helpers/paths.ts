import { fileURLToPath } from "url"
import { dirname, resolve, join } from "path"

const _dirname = dirname(fileURLToPath(import.meta.url))

export const MONOREPO_ROOT = resolve(_dirname, "..", "..", "..", "..")

export const PACKAGE_PATHS: Record<PackageName, string> = {
    core: join(MONOREPO_ROOT, "packages", "core"),
    dev:  join(MONOREPO_ROOT, "packages", "dev"),
    docs: join(MONOREPO_ROOT, "packages", "docs"),
}
