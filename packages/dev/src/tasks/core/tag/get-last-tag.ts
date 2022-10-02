import shell from "shelljs"

import { sortDesc } from "./semver-sort.js"

export const getLastTag = () => {
    const { stdout, stderr, code } = shell.exec("git tag -l -n9", { silent: true })
    if (code !== 0) {
        console.error("Error: failed to list git tags")
        console.error(stderr)
        return null
    }
    const lastTag = sortDesc(stdout.trim().split("\n")).at(0)
    // const tags = stdout.trim().split("\n").map((line) => {
    //     // const split = line.split("    ");
    //     const split = line.split(/\s{4,}/);
    //     return {
    //         version: parseFloat(semver.clean(split[0])),
    //         message: split[1],
    //     };
    // });

    // const lines = stdout.trim().split("\n");
    // const sortedTags = sortDesc(lines)
    // const tags = stdout.trim().split("\n").map((line) => {
    //     // const split = line.split("    ");
    //     const split = line.split(/\s{4,}/);
    //     return {
    //         version: parseFloat(semver.clean(split[0])),
    //         message: split[1],
    //     };
    // });
    // console.log(sorted);
    return lastTag
}
