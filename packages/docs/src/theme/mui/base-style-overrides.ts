import type { CSSObject, SxProps, Theme } from "@mui/material"

import { DarkPlusColors } from "@app/util"
import { ThemeVars } from "@app/theme/variables"
import {
    // ThemeBreakpoints,
    scrollbar,
} from "../helpers"

// =============================================================================
// Resets
// =============================================================================

/**
 * - `<ul></ul>`
 * - `<ol></ol>`
 * - `<li></li>`
 */
const lists: SxProps = {
    // listStyle: "none",
    // listStylePosition: "inside",
    // paddingLeft: "0px",
    // marginLeft: "0px",
    // marginBottom: "default",
    // marginBlockStart: "0px",
    // marginBlockEnd: "0px",
}

/**
 * - `<code></code>`
 */
const _code: SxProps = {
    fontFamily: ThemeVars.fontFamily.monospace,
    lineHeight: "unset",
    fontWeight: 400,
    fontSize: "14px",

    color: DarkPlusColors.fg,
    backgroundColor: DarkPlusColors.bg,

    padding: "1px 4px",
    borderRadius: "3px",

    display: "inline-block",
    verticalAlign: "center",
}

// =============================================================================
// Html / Body
// =============================================================================

const _htmlAndBody: CSSObject = {
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px",
    // overflowY: "hidden",
    // overflowX: "hidden",
}

const html: CSSObject = {
    ..._htmlAndBody,
}

const body = (theme: Theme) => ({
    ..._htmlAndBody,
    ...scrollbar(theme),
    "& ol, & ul, & li": lists,
    // "& code": code,
})

// =============================================================================
// #root
// =============================================================================

const root: CSSObject = {
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px",
    // overflow: "auto !important",
    overflowY: "scroll",
}

// =============================================================================
// All Together
// =============================================================================

export const baseStyleOverrides = (theme: Theme) => ({
    ":root": {
        colorScheme: theme.palette.mode,
        "--theme-mode": theme.palette.mode,
        // NOTE: MUI won't let you set an empty variable (which is usually what you want)
        "--dark-mode-enabled-mui": theme.palette.mode === "dark" ? "initial" : undefined,
    },
    html,
    "body": body(theme),
    "#root": root,
})
