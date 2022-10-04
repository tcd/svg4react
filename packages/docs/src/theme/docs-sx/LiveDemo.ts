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
    fontFamily: ThemeVars.fontFamily.monospace,
}

const container: SxProps = {
    display: "flex",
    flexFlow: "row",
    alignItems: "stretch",
}

const editor: PaperProps = {
    elevation: 2,
    sx: {
        flexGrow: 1,
        borderRadius: "4px",
        overflow: "hidden",
        maxWidth: "50%",
    },
}

const preview: PaperProps = {
    elevation: 2,
    sx: {
        background: "var(--dark-plus-bg)",
        flexGrow: 1,
        mx: 3,
        // p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
        maxHeight: "50vh",
    },
}

const rawPreview: SxProps = {
    width: "100%",
    height: "100%",
}

const errorWrapper: SxProps = {
    position: "absolute",
    top: 0,
    right: 0,
    p: 4,
}


export const LiveDemo = {
    root,
    title,
    componentName,
    container,
    editor,
    preview,
    rawPreview,
    errorWrapper,
}
