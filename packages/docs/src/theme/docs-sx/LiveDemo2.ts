import type { PaperProps } from "@mui/material"
import type { ISxProps as SxProps, ITheme as Theme } from "@app/theme"
import { ThemeVars } from "@app/theme/variables"

const root: PaperProps = {
    elevation: 3,
    sx: {
        position: "relative",
        p: 3,
        maxWidth: {
            mobile: `calc(100vw - 24px - 24px)`, // 24px for padding
            laptop: `calc(100vw - ${ThemeVars.drawerWidth}px - 24px - 24px - 14px)`, // 24px for padding
        },
    },
}

const container: SxProps = {
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
        width: "100%",
        height: "100%",
        minHeight: "300px",
        // flexGrow: 1,
        // borderRadius: "4px",
        // overflow: "hidden",
        // width: "50%",
    },
}

const preview: PaperProps = {
    elevation: 2,
    sx: {
        background: "#1e1e1e",
        // flexGrow: 1,
        // mx: 3,
        // p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
        maxHeight: "50vh",
    },
}

const livePreview: PaperProps = {
    elevation: 2,
    sx: {
        background: "#1e1e1e",
        // flexGrow: 1,
        // mx: 3,
        // p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
        maxHeight: "50vh",
    },
}

const rawPreview_highlight: SxProps = (theme: Theme) => ({
    // width: "100%",
    height: "100%",
    // [theme.breakpoints.up("laptop")]: {
        // width: "100%",
        // height: "100%",
    // },
})

const rawPreview_box: SxProps = (theme: Theme) => ({
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("tablet")]: {
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
    container,
    editor,
    preview,
    livePreview,
    rawPreview: {
        box: rawPreview_box,
        highlight: rawPreview_highlight,
    },
    errorWrapper,
}
