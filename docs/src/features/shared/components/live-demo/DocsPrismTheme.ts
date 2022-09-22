import type { PrismTheme } from "prism-react-renderer"

const colors = <const>{
    fg: "#d4d4d4",
    bg: "#1E1E1E",

    comment: "#608B4E",
    keyword: "#569CD6",
    variable: "#9CDCFE",
    function: "#DCDCAA",
    control: "#C586C0",
    string: "#CE9178",
    number: "#B5CEA8",
    type: "#4EC9B0",
    punctuation: "#808080",
    escape: "#D7BA7D",
}

export const DocsPrismTheme: PrismTheme = {
    plain: {
        color: colors.fg,
        backgroundColor: colors.bg,
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: colors.comment,
            },
        },
        {
            types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
            style: {
                color: colors.keyword,
            },
        },
        {
            types: ["number", "inserted"],
            style: {
                color: colors.number,
            },
        },
        {
            types: ["control-flow"],
            style: {
                color: colors.control,
            },
        },
        {
            types: ["attr-name", "variable"],
            style: {
                color: colors.variable,
            },
        },
        {
            types: ["deleted", "string", "attr-value", "template-punctuation"],
            style: {
                color: colors.string,
            },
        },
        // {
        //     // Fix tag color
        //     types: ["tag"],
        //     style: {
        //         color: colors.type,
        //     },
        // },
        {
            // Fix tag color for HTML
            types: ["tag"],
            languages: ["markup", "jsx"],
            style: {
                color: colors.punctuation,
            },
        },
        {
            types: ["operator"],
            style: {
                color: colors.control,
            },
        },
        {
            // Fix punctuation color for HTML
            types: ["punctuation"],
            languages: ["markup"],
            style: {
                color: colors.punctuation,
            },
        },
        {
            types: ["function"],
            style: {
                color: colors.function,
            },
        },
        {
            types: ["class-name"],
            style: {
                color: colors.type,
            },
        },
        {
            types: ["char"],
            style: {
                color: colors.escape,
            },
        },
    ],
}
