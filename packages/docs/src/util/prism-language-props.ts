import type { Grammar } from "prismjs"

/**
 * @see [Extending Prism - Language definitions](https://prismjs.com/extending.html)
 */
export const PrismLanguageProps: Grammar = {
    operator: /\|/,
    boolean: /\b(?:false|true)\b/,
    keyword: /\$\{|\}/,
    string: /("[^"]+")|(`)/,
    property: {
        pattern: /[a-zA-Z_]([a-zA-Z_0-9]+)?\??:/,
        inside: {
            type: /:|\?/,
        },
    },
    type: /\b(string|number)\b/,
}
