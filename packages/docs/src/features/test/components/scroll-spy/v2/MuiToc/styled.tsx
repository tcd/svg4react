import { styled, alpha } from "@mui/material/styles"
import { Link, LinkProps, Typography, useTheme } from "@mui/material"

import type { ITheme as Theme } from "@app/theme"

export const Nav = styled("nav")(({ theme }: { theme: Theme }) => ({
    top: "70px",
    right: 0,
    order: 1,
    width: 240,
    flexShrink: 0,
    zIndex: 1_000_000,
    position: "fixed",
    height: "100vh",
    overflowY: "auto",
    backgroundColor: "slateblue",
    padding: theme.spacing("calc(69px + 1rem)", 4, 2, 0),
    display: "flex",
    flexDirection: "column",
}))

export const NavLabel = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1.4),
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    letterSpacing: ".08rem",
    color: theme.palette.grey[600],
}))

export const NavList = styled(Typography)({
    padding: 0,
    margin: 0,
    listStyle: "none",
})

export type StyledNavItemProps = {
    active?: any
    secondary?: any
    theme: Theme
}

// interface NavItemProps extends LinkProps {
//     active?: any
//     secondary?: any
// }
//
// export const NavItem = (props: NavItemProps) => {
//     const {
//         active,
//         secondary,
//         ...otherProps
//     } = props
//
//     const theme = useTheme()
//
//     const activeStyles = {
//         borderLeftColor: theme.palette.primary.main,
//         color: theme.palette.primary.main,
//         "&:hover": {
//             borderLeftColor: "lime",
//             color: "lime",
//         },
//     }
//
//     const styles = {
//         fontSize: theme.typography.pxToRem(13),
//         padding: theme.spacing(0, 1, 0, secondary ? 2.5 : "10px"),
//         margin: theme.spacing(0.5, 0, 1, 0),
//         borderLeft: `1px solid transparent`,
//         boxSizing: "border-box",
//         fontWeight: 500,
//         "&:hover": {
//             borderLeftColor:
//         theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600],
//             color: theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[200],
//         },
//         ...(!active && {
//             color: theme.palette.mode === "dark" ? theme.palette.grey[500] : theme.palette.text.primary,
//         }),
//         // TODO: We probably want `aria-current="location"` instead.
//         ...(active && activeStyles),
//         "&:active": activeStyles,
//     }
//
//     return <Link sx={styles} {...otherProps} />
// }

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
            borderLeftColor:
        theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600],
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
