import semver from "semver"
import semverRegex from "semver-regex"

const sort = (semvers, compare) => {
    if (!semvers instanceof Array) {
        throw new Error("It is not an array")
    }

    return semvers.sort(function (v1, v2) {
        var sv1 = semverRegex().exec(v1)[0] || v1
        var sv2 = semverRegex().exec(v2)[0] || v2

        return compare(sv1, sv2)
    })
}

export const sortAsc  = (semvers) => sort(semvers, semver.compare)
export const sortDesc = (semvers) => sort(semvers, semver.rcompare)
