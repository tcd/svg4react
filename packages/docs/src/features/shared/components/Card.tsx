import type { ReactNode } from "react"
import { Box, Divider, Paper, Typography } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { DocsSx } from "@app/theme"

export type CardProps = JSX.IntrinsicElements["div"] & {
    id?: string
    title: string | ReactNode
    componentName?: Svg4ReactComponent
    suffix?: string
    children: ReactNode
    sx?: SxProps
}

export const Card = (props: CardProps): JSX.Element => {

    let {
        id = undefined,
        title,
        componentName = null,
        suffix = "Demo",
        children = null,
        sx = {},
        ...otherProps
    } = props

    if (componentName) {
        // @ts-ignore: next-line
        title = <>
            <Box component="span" sx={DocsSx.Card.componentName}>&lt;{componentName}&gt;</Box>
            <Box component="span">&nbsp;</Box>
            <Box component="span">{suffix}</Box>
        </>
    }

    return (
        <Paper
            id={id}
            {...otherProps}
            {...DocsSx.Card.root}
            // @ts-ignore: next-line
            sx={{
                ...DocsSx.Card.root.sx,
                ...sx,
            }}
        >
            <Typography
                gutterBottom
                variant="h4"
                sx={DocsSx.Card.title}
            >
                {title}
            </Typography>
            <Divider sx={{ width: "100%", mb: 4 }} />
            <Box sx={DocsSx.Card.body}>
                {children && children}
            </Box>
        </Paper>
    )
}
