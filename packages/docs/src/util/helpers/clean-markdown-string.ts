/* eslint-disable no-console */

export const cleanMarkdownString = (input: string): string => {
    try {
        return `${input}`
            .replace(/^"/, "")
            .replace(/"$/, "")
            // .replaceAll(/(?<!\n|\|)\n{1}(?!\n)/gm, " ") // only break for two newlines
            // .replaceAll(/(?<!\\n)\\n{1}(?!\\n)/gm, " ") // only break for two newlines
            .replaceAll("\\n", "\n") // unescape json
    } catch (e) {
        console.error("[cleanMarkdownString] regex error")
        console.error(e)
        return cleanMarkdownStringWebkit(input)
    }
}

/**
 * WebKit based browsers (like Safari & all iOS browsers) don't support RegExp lookbehind. (broke the whole app for a minute)
 *
 * @see [Bug 174931: Implement RegExp lookbehind assertions](https://bugs.webkit.org/show_bug.cgi?id=174931)
 */
const cleanMarkdownStringWebkit = (input: string): string => {
    try {
        return `${input}`
            .replace(/^"/, "")
            .replace(/"$/, "")
            .replaceAll("\\n", "\n") // unescape json
    } catch (e) {
        console.error("[cleanMarkdownStringWebkit] regex error")
        console.error(e)
        return input
    }
}
