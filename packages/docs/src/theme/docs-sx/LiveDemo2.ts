import type { PaperProps } from "@mui/material"
import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"
import type {
    ISxProps as SxProps,
    ITheme as Theme,
} from "@app/theme"
import { ThemeVars } from "@app/theme/variables"

const root: PaperProps = {
    elevation: 2,
    sx: {
        position: "relative",
        p: 3,
        maxWidth: "100%",
        // maxWidth: {
        //     mobile: `calc(100vw - 24px - 24px)`, // 24px for padding
        //     laptop: `calc(100vw - ${ThemeVars.drawerWidth} - 24px - 24px - 14px)`, // 24px for padding
        // },
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

const grid: GridProps = {
    container: true,
    spacing: 4,
    direction: {
        mobile: "column",
        laptop: "row" ,
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
        display: "flex",
        justifyContent: "stretch",
        alignItems: "stretch",
    },
}

const preview: PaperProps = {
    elevation: 2,
    sx: {
        height: "100%",
        // background: theme.palette.mode === "dark" ? "#1e1e1e" : "#eff1f3",
        background: "var(--dark-plus-bg)",
        // flexGrow: 1,
        // mx: 3,
        // p: 4,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",

        // position: "relative",
        // maxHeight: "50vh",
    },
}

const livePreview: SxProps = {
    height: "100%",
    // width: "100%",
    // background: "#1e1e1e",
    // background: "blue",
    // flexGrow: 1,
    // mx: 3,
    // p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "relative",
    maxHeight: "50vh",
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
    flexGrow: 1,
    // [theme.breakpoints.down("tablet")]: {
    // },
})

const errorWrapper: SxProps = {
    position: "absolute",
    top: 0,
    right: 0,
    p: 4,
}

export const LiveDemo2 = {
    root,
    grid,
    container,
    editor,
    errorWrapper,
    preview: {
        root: preview,
        live: livePreview,
        raw: {
            box: rawPreview_box,
            highlight: rawPreview_highlight,
        },
    },
}
