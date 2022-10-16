import { Link, Typography, styled } from "@mui/material"

import { DocsSx } from "@app/theme"
import type { ITheme as Theme } from "@app/theme"

// @ts-ignore: next-line
export const Nav = styled("nav")(DocsSx.MuiToc.nav)
// @ts-ignore: next-line
export const NavLabel = styled(Typography)(DocsSx.MuiToc.navLabel)
// @ts-ignore: next-line
export const NavList = styled(Typography)(DocsSx.MuiToc.navList)

export type StyledNavItemProps = {
    active?: any
    secondary?: any
    theme: Theme
}

export const NavItem = styled(Link, {
    shouldForwardProp: (prop) => prop !== "active" && prop !== "secondary",
})(({ active, secondary, theme }: StyledNavItemProps) => {
    const activeStyles = {
        borderLeftColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        "&:hover": {
            borderLeftColor: "lime",
            color: "lime",
        },
    }

    return {
        fontSize: theme.typography.pxToRem(13),
        padding: theme.spacing(0, 1, 0, secondary ? 2.5 : "10px"),
        margin: theme.spacing(0.5, 0, 1, 0),
        borderLeft: `1px solid transparent`,
        boxSizing: "border-box",
        fontWeight: 500,
        "&:hover": {
            borderLeftColor: theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600],
            color: theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[200],
        },
        ...(!active && {
            color: theme.palette.mode === "dark" ? theme.palette.grey[500] : theme.palette.text.primary,
        }),
        // TODO: We probably want `aria-current="location"` instead.
        ...(active && activeStyles),
        "&:active": activeStyles,
    }
})
