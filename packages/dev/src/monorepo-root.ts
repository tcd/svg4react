import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

const _dirname = dirname(fileURLToPath(import.meta.url))

export const MONOREPO_ROOT = resolve(_dirname, "..", "..", "..")
