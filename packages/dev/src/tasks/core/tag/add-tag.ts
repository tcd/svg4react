/* eslint-disable no-console */

import shell from "shelljs"

export const addTag = (version: string, message: string): boolean => {
    const { stderr, code } = shell.exec(`git tag -a ${version} -m "${message}"`, { silent: true })
    if (code !== 0) {
        console.error("Error: failed to add git tag")
        console.error(stderr)
        return false
    }
    return true
}
