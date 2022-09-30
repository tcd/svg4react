import type { CSSObject, SxProps } from "@mui/material"

import { DarkPlusColors } from "@app/util"
import { ThemeVars } from "@app/theme/variables"
import {
    // ThemeBreakpoints,
    scrollbar,
} from "../helpers"

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
const code: SxProps = {
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

const body: CSSObject = {
    ..._htmlAndBody,
    ...scrollbar(),
    "& ol, & ul, & li": lists,
    // "& code": code,
}

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
    // overflowX: "hidden",
    // [ThemeBreakpoints.up("sm")]: {
    //     // scrollSnapType: "y mandatory",
    // },
}

// =============================================================================
// All Together
// =============================================================================

export const baseStyleOverrides: CSSObject = {
    html,
    body,
    "#root": root,
}
