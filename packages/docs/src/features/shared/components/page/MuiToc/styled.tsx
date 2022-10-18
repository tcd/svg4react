import { Link, Typography, styled, LinkProps, useTheme } from "@mui/material"

import { DocsSx } from "@app/theme"

// @ts-ignore: next-line
export const Nav = styled("nav")(DocsSx.MuiToc.nav)
// @ts-ignore: next-line
export const NavLabel = styled(Typography)(DocsSx.MuiToc.navLabel)
// @ts-ignore: next-line
export const NavList = styled(Typography)(DocsSx.MuiToc.navList)

export interface NavItemProps extends LinkProps {
    active?: boolean
    secondary?: boolean
}

export const NavItem = (props: NavItemProps): JSX.Element => {

    const {
        active,
        secondary,
        ...otherProps
    } = props

    const theme = useTheme()

    const sx = DocsSx.MuiToc.navItem({ active, secondary, theme })

    return (
        <Link
            {...otherProps}
            sx={sx}
        />
    )
}

// export const NavItem = styled(Link, {
//     shouldForwardProp: (prop) => prop !== "active" && prop !== "secondary",
//     // @ts-ignore: next-line
// })((props) => DocsSx.MuiToc.navItem(props))
