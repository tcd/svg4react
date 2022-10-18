import type {
    ISxProps as SxProps,
    ITheme as Theme,
} from "@app/theme"
import { ThemeVars } from "@app/theme/variables"

export type MuiStyledProps = {
    theme: Theme
}

const navSpacer: SxProps = {
    width: `calc(${ThemeVars.tocWidth} + 10px)`,
    // backgroundColor: "cyan",
    flexShrink: 0,
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
        // flexShrink: 0,
        position: "fixed",
        // height: "100vh",
        overflowY: "auto",
        zIndex: 100_000,
        // background: "cyan",
        display: "block",
        padding: "10px",
    },
})

const navLabel = ({ theme }: MuiStyledProps): SxProps => ({
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingLeft: "10px",
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    letterSpacing: ".08rem",
    color: theme.palette.grey[600],
})

const navList = ({ }: MuiStyledProps): SxProps => ({
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    paddingTop: "20px",
    listStyle: "none",
})

export type StyledNavItemProps = {
    active?: any
    secondary?: any
    theme: Theme
}

const navItem = ({ active, secondary, theme }: StyledNavItemProps): SxProps => {
    const hoverColor = theme.palette.mode === "dark" ? "white" : "black"

    const activeStyles = {
        borderLeftColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        "&:hover": {
            borderLeftColor: theme.palette.text.primary,
            color: hoverColor,
        },
    }

    return {
        textDecoration: "none",
        fontSize: theme.typography.pxToRem(13),
        padding: theme.spacing(0, 1, 0, secondary ? 2.5 : "10px"),
        margin: theme.spacing(0.5, 0, 1, 0),
        borderLeft: `1px solid transparent`,
        boxSizing: "border-box",
        fontWeight: 500,
        "&:hover": {
            textDecoration: "none",
            borderLeftColor: theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600],
            color:           theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[200],
        },
        ...(!active && {
            color: theme.palette.mode === "dark" ? theme.palette.grey[500] : theme.palette.text.primary,
        }),
        // TODO: We probably want `aria-current="location"` instead.
        ...(active && activeStyles),
        // "&:active": activeStyles,
    }
}

export const MuiToc = {
    nav,
    navLabel,
    navList,
    navItem,
    navSpacer,
}
