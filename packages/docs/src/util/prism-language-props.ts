import type { Grammar } from "prismjs"

/**
 * @see [Extending Prism - Language definitions](https://prismjs.com/extending.html)
 */
export const PrismLanguageProps: Grammar = {
    operator: /\|/,
    boolean: /\b(?:false|true)\b/,
    keyword: /\$\{|\}/,
    string: {
        // pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        pattern: /("[^"]+")|(`)/,
        // lookbehind: true,
        greedy: true,
    },
    property: {
        pattern: /[a-zA-Z_][a-zA-Z_0-9]+\??:/,
        inside: {
            type: {
                pattern: /:|\?/,
            },
        },
    },
    type: {
        pattern: /\b(string|number)\b/,
        // greedy: true,
    },
    // "template-string": {
    //     pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    //     greedy: true,
    //     inside: {
    //         "template-punctuation": {
    //             pattern: /^`|`$/,
    //             alias: "string",
    //         },
    //         "interpolation": {
    //             pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
    //             lookbehind: true,
    //             inside: {
    //                 "interpolation-punctuation": {
    //                     pattern: /^\$\{|\}$/,
    //                     alias: "punctuation",
    //                 },
    //                 rest: {
    //                     string: {
    //                         pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    //                         lookbehind: true,
    //                         greedy: true,
    //                     },
    //                 },
    //             },
    //         },
    //         "string": /[\s\S]+/,
    //     },
    // },
}
