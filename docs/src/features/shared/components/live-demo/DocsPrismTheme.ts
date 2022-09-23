import type { PrismTheme } from "prism-react-renderer"

import { DarkPlusColors } from "@app/util"

export const DocsPrismTheme: PrismTheme = {
    plain: {
        color: DarkPlusColors.fg,
        backgroundColor: DarkPlusColors.bg,
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: DarkPlusColors.comment,
            },
        },
        {
            types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
            style: {
                color: DarkPlusColors.keyword,
            },
        },
        {
            types: ["number", "inserted"],
            style: {
                color: DarkPlusColors.number,
            },
        },
        {
            types: ["control-flow"],
            style: {
                color: DarkPlusColors.control,
            },
        },
        {
            types: ["attr-equals"],
            style: {
                color: DarkPlusColors.control,
            },
        },
        {
            types: ["attr-name", "variable", "spread"],
            style: {
                color: DarkPlusColors.variable,
            },
        },
        {
            types: ["deleted", "string", "attr-value", "template-punctuation"],
            style: {
                color: DarkPlusColors.string,
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
                color: DarkPlusColors.punctuation,
            },
        },
        {
            types: ["operator"],
            style: {
                color: DarkPlusColors.control,
            },
        },
        {
            // Fix punctuation color for HTML
            types: ["punctuation"],
            languages: ["markup"],
            style: {
                color: DarkPlusColors.punctuation,
            },
        },
        {
            types: ["function"],
            style: {
                color: DarkPlusColors.function,
            },
        },
        {
            types: ["class-name"],
            style: {
                color: DarkPlusColors.type,
            },
        },
        {
            types: ["char"],
            style: {
                color: DarkPlusColors.escape,
            },
        },
    ],
}
