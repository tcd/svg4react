import { DarkPlusColors } from "@app/util"
import { ThemeVars } from "@app/theme/variables"
import type { ISxProps as SxProps } from "@app/theme"


/** @see https://mui.com/material-ui/customization/default-theme/ */
const _muiDefaults: Record<string, SxProps> = {
    h1: {
        fontWeight: 300,
        fontSize: "6rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
    },
    h2: {
        fontWeight: 300,
        fontSize: "3.75rem",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",
    },
    h3: {
        fontWeight: 400,
        fontSize: "3rem",
        lineHeight: 1.167,
        letterSpacing: "0em",
    },
    body1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
    },
}

/**
 * Override *user agent styles* for vertical margins.
 */
const reset: SxProps = {
    marginBlockStart: "unset",
    marginBlockEnd: "unset",
}

const root: SxProps = {
    p: 3,
//     // -------------------------------------------------------------------------
//     // Inline Code
//     // -------------------------------------------------------------------------
//     "& code": {
//         fontFamily: ThemeVars.fontFamily.monospace,
//         lineHeight: "unset",
//         fontWeight: 400,
//         fontSize: "14px",
//
//         color: DarkPlusColors.fg,
//         backgroundColor: DarkPlusColors.bg,
//
//         padding: "1px 4px",
//         borderRadius: "3px",
//
//         display: "inline-block",
//         verticalAlign: "center",
//     },
//     // -------------------------------------------------------------------------
//     // Lists
//     // -------------------------------------------------------------------------
//     "& ol, & ul": {
//         display: "block",
//         listStyleType: "disc",
//
//         paddingInlineStart: "40px",
//
//         marginBlockStart: "16px",
//         marginBlockEnd: "16px",
//     },
//     "& li": {
//         display: "list-item",
//         listStyleType: "disc",
//         textAlign: "left",
//     },
//     // -------------------------------------------------------------------------
//     // Links
//     // -------------------------------------------------------------------------
//     "& a": {
//         color: (theme) => theme.palette.secondary.main,
//         textDecoration: "none",
//         "&:hover, &:focus, &:active": {
//             textDecoration: "underline",
//         },
//     },
//     // -------------------------------------------------------------------------
//     // Headings
//     // -------------------------------------------------------------------------
//     "& h1": {
//         // display: "block",
//         // marginBlockStart: "0.67em",
//         ...reset,
//         mt: 0,
//         mb: 5,
//     },
//     "& h2": {
//         // marginBlockStart: "0.83em",
//         ...reset,
//         mt: 5,
//         mb: 0,
//     },
//     "& h3": {
//         ...reset,
//         mt: 1,
//     },
//     // -------------------------------------------------------------------------
//     // Typography
//     // -------------------------------------------------------------------------
//     "& p": {
//         // marginBlockStart: "1.00em",
//         ...reset,
//         marginBlockStart: "0.75em",
//         marginBlockEnd: "0.75em",
//         // pt: 0,
//         // pb: 2,
//     },
}

export const Changelog = {
    root,
}
