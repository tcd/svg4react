import type { Grammar } from "prismjs"

/**
 * @see [Extending Prism - Language definitions](https://prismjs.com/extending.html)
 */
export const PrismLanguageProps: Grammar = {
    operator: /\|/,
    boolean: /\b(?:false|true)\b/,
    type: /\b(?:string|number)\b/,
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true,
    },
}
