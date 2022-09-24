import type { PaperProps } from "@mui/material"
import type { ISxProps as SxProps } from "@app/theme"
import { ThemeVars } from "@app/theme/variables"

const root: PaperProps = {
    elevation: 3,
    sx: {
        p: 3,
    },
}

const title: SxProps = {
    // mb: 4,
}

const componentName: SxProps = {
    display: "inline-block",
    verticalAlign: "center",

    fontFamily: ThemeVars.fontFamily.monospace,

    backgroundColor: "rgba(175, 184, 193, 0.2)",

    m: 0,
    p: "0.1em",
    // py: "0.2em",
    // px: "0.2em",

    borderRadius: "6px",
}

const body: SxProps = {
    // mb: 4,
}

export const Card = {
    root,
    title,
    componentName,
    body,
}
