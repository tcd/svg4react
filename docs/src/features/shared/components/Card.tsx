import { Box, Divider, Paper, Typography } from "@mui/material"

import { DocsSx } from "@app/theme"

export interface CardProps {
    title: string | React.ReactNode
    componentName?: string
    children: React.ReactNode
}

export const Card = (props: CardProps): JSX.Element => {

    let {
        title,
        componentName = null,
        children = null,
    } = props

    if (componentName) {
        title = <>
            <Box component="span" sx={DocsSx.LiveDemo.componentName}>&lt;{componentName}&gt;</Box>
            <Box component="span">&nbsp;</Box>
            <Box component="span">Demo</Box>
        </>
    }

    return (
        <Paper {...DocsSx.LiveDemo.root}>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={DocsSx.LiveDemo.title}
            >
                {title}
            </Typography>
            <Divider sx={{ width: "100%", mb: 4 }} />
            {children && children}
        </Paper>
    )
}
