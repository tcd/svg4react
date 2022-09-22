import type { Property } from "csstype"
// import CssType from "csstype"

const sansFallbacks = [
    "'SF Pro Text'",
    "Helvetica",
    "Arial",
    "sans-serif",
]

const serifFallbacks = [
    "Georgia",
    `"Times New Roman"`,
    "serif",
]

const monospaceFallbacks = [
    // "SFMono-Regular",
    // "Consolas",
    // `'Liberation Mono'`,
    // "Menlo",
    `'Courier New'`,
    "Courier",
    "monospace",
]

// Partial<CssType.DataType.GenericFamily>
export type FontType =
    | "sans"
    | "serif"
    | "monospace"

/**
 * Font families available to Material UI.
 */
export const fontFamily: Record<FontType, Property.FontFamily> = {
    sans:      ["Roboto",         ...sansFallbacks].join(","),
    serif:     ["'Roboto Serif'", ...serifFallbacks].join(","),
    monospace: ["'Roboto Mono'",  ...monospaceFallbacks].join(","),
}
