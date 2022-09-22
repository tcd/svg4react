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
        backgroundColor: "#1a2027",
        flexGrow: 1,
        mx: 3,
        // p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
