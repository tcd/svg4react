import type { PaperProps } from "@mui/material"
import type { ISxProps as SxProps } from "@app/theme"
import { ThemeVars } from "@app/theme/variables"

const root: PaperProps = {
    elevation: 3,
    sx: {
        // background: "indianred",
        p: 3,
    },
}

const title: SxProps = {
    // background: "orange",
    // mb: 4,
}

const componentName: SxProps = {
    fontFamily: ThemeVars.fontFamily.monospace,
}

const container: SxProps = {
    // background: "orange",
    display: "flex",
    flexFlow: "row",
    alignItems: "stretch",
}

const editor: PaperProps = {
    elevation: 2,
    sx: {
        // background: "yellow",
        flexGrow: 1,
        borderRadius: "4px",
        overflow: "hidden",
    },
}

const preview: PaperProps = {
    elevation: 2,
    sx: {
        // background: "royalblue",
        flexGrow: 1,
        mx: 3,
        // p: 4,
    },
}

const error: SxProps = {
    flexGrow: 0,
}

export const LiveDemo = {
    root,
    title,
    componentName,
    container,
    editor,
    preview,
    error,
}
