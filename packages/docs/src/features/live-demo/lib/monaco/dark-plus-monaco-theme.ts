import type { customMonaco } from "@app/features/live-demo"

import { DarkPlusColors } from "@app/util"

export const DarkPlusMonacoTheme: customMonaco.editor.IStandaloneThemeData = {
    base: "vs-dark",
    inherit: true,
    colors: {
        "editor.foreground": "#d4d4d4",
    },
    rules: [
        {
            token: "string.ts",
            foreground: DarkPlusColors.string,
        },
        {
            token: "identifier.ts",
            foreground: DarkPlusColors.variable,
        },
        // {
        //     token: "delimiter.ts",
        //     foreground: DarkPlusColors.control,
        // },
        {
            token: "delimiter.bracket.ts",
            foreground: DarkPlusColors.fg,
        },
        {
            token: "type.identifier.ts",
            foreground: DarkPlusColors.type,
        },
        // {
        //     // FIXME: doesn't catch `/>`
        //     token: "delimiter.angle.ts",
        //     foreground: DarkPlusColors.punctuation,
        // },
    ],
}
