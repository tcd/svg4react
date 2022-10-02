import type { compare as Compare, SemVer } from "semver"
import semver from "semver"
import semverRegex from "semver-regex"

const sort = (versions: string[] | SemVer, compare: typeof Compare) => {
    if (!Array.isArray(versions)) {
        throw new Error("It is not an array")
    }

    return versions.sort((v1, v2) => {
        const sv1 = semverRegex().exec(v1)[0] || v1
        const sv2 = semverRegex().exec(v2)[0] || v2

        return compare(sv1, sv2)
    })
}

export const sortAsc  = (versions: string[]) => sort(versions, semver.compare)
export const sortDesc = (versions: string[]) => sort(versions, semver.rcompare)
