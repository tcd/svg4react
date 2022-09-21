import type { CSSObject, SxProps } from "@mui/material"

import {
    // ThemeBreakpoints,
    scrollbar,
} from "./helpers"

/**
 * - `<ul></ul>`
 * - `<ol></ol>`
 * - `<li></li>`
 */
const lists: SxProps = {
    listStyle: "none",
    listStylePosition: "inside",
    paddingLeft: "0px",
    marginLeft: "0px",
    marginBottom: "default",
    marginBlockStart: "0px",
    marginBlockEnd: "0px",
}

const _htmlAndBody: CSSObject = {
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px",
    // overflowY: "hidden",
    // overflowX: "hidden",
    backgroundColor: "#fafafa", // from mui-treasury
}

const html: CSSObject = {
    ..._htmlAndBody,
}

const body: CSSObject = {
    ..._htmlAndBody,
    ...scrollbar(),
    "& ol, & ul, & li": lists,
}

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

export const baseStyleOverrides: CSSObject = {
    html: html,
    body: body,
    "#root": root,
}
