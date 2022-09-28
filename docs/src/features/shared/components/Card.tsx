import { Box, Divider, Paper, Typography } from "@mui/material"

import { DocsSx } from "@app/theme"

export interface CardProps {
    id?: string
    title: string | React.ReactNode
    componentName?: string
    children: React.ReactNode
}

export const Card = (props: CardProps): JSX.Element => {

    let {
        id = undefined,
        title,
        componentName = null,
        children = null,
    } = props

    if (componentName) {
        title = <>
            <Box component="span" sx={DocsSx.Card.componentName}>&lt;{componentName}&gt;</Box>
            <Box component="span">&nbsp;</Box>
            <Box component="span">Demo</Box>
        </>
    }

    return (
        <Paper id={id} {...DocsSx.Card.root}>
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
