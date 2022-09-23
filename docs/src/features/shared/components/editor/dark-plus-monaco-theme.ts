import type { monacoApi } from "."

import { DarkPlusColors } from "@app/util"

export const DarkPlusMonacoTheme: monacoApi.editor.IStandaloneThemeData = {
    base: "vs-dark",
    inherit: true,
    colors: {
        "editor.foreground": "#d4d4d4",
    },
    rules: [
        {
            token: "string.js",
            foreground: DarkPlusColors.string,
        },
        {
            token: "identifier.js",
            foreground: DarkPlusColors.variable,
        },
        // {
        //     token: "delimiter.js",
        //     foreground: DarkPlusColors.control,
        // },
        {
            token: "delimiter.bracket.js",
            foreground: DarkPlusColors.fg,
        },
    ],
}
