import type { ReactNode } from "react"
import type { Element } from "hast"
import { Link as RouterLink } from "react-router-dom"
import { Link as MuiLink } from "@mui/material"

import { ISxProps as SxProps } from "@app/theme"

type MarkdownLinkProps = Omit<JSX.IntrinsicElements["a"], "ref"> &  {
    node: Element,
    children?: ReactNode[]
}

export const MarkdownLink = (props: MarkdownLinkProps): JSX.Element => {

    const {
        node,
        href = "",
        ...otherProps
    } = props

    if (href.startsWith("/")) {
        return (
            <MuiLink
                component={RouterLink}
                to={href}
                sx={sx}
                {...otherProps}
            />
        )
    }

    return (
        <MuiLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            // sx={sx}
            {...otherProps}
        />
    )
}

const sx: SxProps = {
    "&:hover": {
        color: (theme) => theme.palette.primary.main,
        cursor: "pointer",
    },
}
