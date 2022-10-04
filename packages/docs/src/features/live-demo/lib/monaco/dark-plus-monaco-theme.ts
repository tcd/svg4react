import type { customMonaco } from "@app/features/live-demo"

import type { ICodePalette } from "@app/util"
import { DarkPlusColors, LightPlusColors } from "@app/util"

const buildMonacoTheme = (base: customMonaco.editor.BuiltinTheme, palette: ICodePalette): customMonaco.editor.IStandaloneThemeData => ({
    base: base,
    inherit: false,
    colors: {
        "editor.foreground": palette.fg,
        "editor.background": palette.bg,
        "editorLineNumber.activeForeground": palette.keyword,
    },
    rules: [
        {
            token: "comment.ts",
            foreground: palette.comment,
        },
        {
            token: "keyword.ts",
            foreground: palette.keyword,
        },
        {
            token: "string.ts",
            foreground: palette.string,
        },
        {
            token: "number.ts",
            foreground: palette.number,
        },
        {
            token: "identifier.ts",
            foreground: palette.variable,
        },
        // {
        //     token: "delimiter.ts",
        //     foreground: palette.control,
        // },
        {
            token: "delimiter.bracket.ts",
            foreground: palette.fg,
        },
        {
            token: "type.identifier.ts",
            foreground: palette.type,
        },
        // {
        //     // FIXME: doesn't catch `/>`
        //     token: "delimiter.angle.ts",
        //     foreground: palette.punctuation,
        // },
    ],
})

export const DarkPlusMonacoTheme  = buildMonacoTheme("vs-dark", DarkPlusColors)
export const LightPlusMonacoTheme = buildMonacoTheme("vs", LightPlusColors)
