import shell from "shelljs"

export const pushTag = (tagName: string): boolean => {
    const { stderr, code } = shell.exec(`git push origin ${tagName}`, { silent: false })
    if (code !== 0) {
        console.error("Error: failed to push git tags")
        console.error(stderr)
        return false
    }
    return true
}
