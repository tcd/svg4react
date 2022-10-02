import type { PaperProps } from "@mui/material"
import type { ISxProps as SxProps, ITheme as Theme } from "@app/theme"
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
    position: "relative",
    display: "flex",
    // flexFlow: "row",
    alignItems: "stretch",
    flexFlow: {
        mobile: "column",
        tablet: "column",
        laptop: "row",
    },
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
        background: "#1e1e1e",
        // flexGrow: 1,
        mx: 3,
        // p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
        maxHeight: "50vh",
    },
}

const rawPreview_highlight: SxProps = (theme: Theme) => ({
    [theme.breakpoints.up("laptop")]: {
        width: "100%",
        height: "100%",
    },
})

const rawPreview_box: SxProps = (theme: Theme) => ({
    [theme.breakpoints.up("laptop")]: {
        width: "100%",
        height: "100%",
    },
})

const errorWrapper: SxProps = {
    position: "absolute",
    top: 0,
    right: 0,
    p: 4,
}


export const LiveDemo2 = {
    root,
    title,
    componentName,
    container,
    editor,
    preview,
    rawPreview: {
        box: rawPreview_box,
        highlight: rawPreview_highlight,
    },
    errorWrapper,
}
