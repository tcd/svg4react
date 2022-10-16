import type {
    ISxProps as SxProps,
    ITheme as Theme,
} from "@app/theme"
import { ThemeVars } from "@app/theme/variables"

export type MuiStyledProps = {
    theme: Theme
}

const nav = ({ theme }: MuiStyledProps): SxProps => ({
    [theme.breakpoints.down("tablet")]: {
        display: "none",
    },
    [theme.breakpoints.up("tablet")]: {
        top: ThemeVars.headerHeight,
        right: 0,
        order: 1,
        width: ThemeVars.tocWidth,
        flexShrink: 0,
        position: "fixed",
        height: "100vh",
        overflowY: "auto",
        zIndex: 100_000,
        background: "cyan",
        display: "block",
        padding: "10px",
    },
})

const navLabel = ({ theme }: MuiStyledProps): SxProps => ({
    marginTop: 2,
    marginBottom: 1,
    paddingLeft: 1.4,
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    letterSpacing: ".08rem",
    color: theme.palette.grey[600],
})

const navList = ({ theme }: MuiStyledProps): SxProps => ({
    p: 0,
    m: 0,
    listStyle: "none",
})

export const MuiToc = {
    nav,
    navLabel,
    navList,
}
