import { Box, Divider, Paper, Typography } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { DocsSx } from "@app/theme"

export interface CardProps {
    id?: string
    title: string | React.ReactNode
    componentName?: Svg4ReactComponent
    suffix?: string
    children: React.ReactNode
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
    } = props

    if (componentName) {
        title = <>
            <Box component="span" sx={DocsSx.Card.componentName}>&lt;{componentName}&gt;</Box>
            <Box component="span">&nbsp;</Box>
            <Box component="span">{suffix}</Box>
        </>
    }

    return (
        <Paper
            id={id}
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
                component="div"
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
