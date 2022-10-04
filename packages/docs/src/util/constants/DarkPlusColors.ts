export interface ICodePalette {
    fg: string
    bg: string
    comment: string
    keyword: string
    variable: string
    function: string
    control: string
    string: string
    number: string
    type: string
    punctuation: string
    escape: string
    regex: string
}

export const DarkPlusColors: ICodePalette = {
    fg: "#D4D4D4",
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
    regex: "#D16969",
}

export const LightPlusColors: ICodePalette = {
    fg: "#24292F",
    bg: "#EFF1F3",

    comment: "#008000",
    keyword: "#0000FF",
    variable: "#0070C1",
    function: "#795E26",
    control: "#AF00DB",
    string: "#A31515",
    number: "#098658",
    type: "#267f99",
    punctuation: "#808080",
    escape: "#D7BA7D",
    regex: "#811F3F",
}

// export const DarkPlusPalette: ThemeColorPalette = {
//     // Semantic
//     RegExp:      "#d16969",
//     Strings:     "#ce9178",
//     Chars:       "#d7ba7d",
//     Types:       "#4ec9b0",
//     Variables:   "#9cdcfe",
//     Functions:   "#dcdcaa",
//     Numbers:     "#b5cea8",
//     Keywords:    "#569cd6",
//     FlowControl: "#c586c0",
//     Comments:    "#505050",
//     DocComments: "#608b4e",
//     Tags:        "#808080",
//     Noise:       "#404040",
//     // UI
//     Foreground:  "#d4d4d4",
//     Background:  "#1e1e1e",
//     // Selection:   "#add6ff26",
//     Selection:   "#264f78",
//     Primary:     "#608b4e",
//     Secondary:   "#007acc",
//     Error:       "#d16969",
//     Warning:     "#d7ba7d",
//     Info:        "#9cdcfe",
//     Success:     "#608b4e",
// }

// export const LightPlusPalette: ThemeColorPalette = {
//     // Semantic
//     RegExp:      "#811f3f",
//     Strings:     "#a31515",
//     Chars:       "#ee0000",
//     Types:       "#267f99",
//     Variables:   "#0070c1",
//     Functions:   "#795e26",
//     Numbers:     "#098658",
//     Keywords:    "#0000ff",
//     FlowControl: "#af00db",
//     Comments:    "#008000",
//     DocComments: "#008000",
//     Tags:        "#1e1e1e",
//     Noise:       "#a4a4a4",
//     // UI
//     Foreground:  "#1e1e1e",
//     Background:  "#d4d4d4",
//     Selection:   "#add6ff80",
//     Primary:     "#008000",
//     Secondary:   "#af00db",
//     Error:       "#811f3f",
//     Warning:     "#795e26",
//     Info:        "#0070c1",
//     Success:     "#008000",
// }
