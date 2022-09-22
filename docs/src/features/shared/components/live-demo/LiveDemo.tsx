import { Box, Divider, Paper, Typography } from "@mui/material"
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview,
} from "react-live"

import { DocsSx } from "@app/theme"
import { DocsPrismTheme } from "./DocsPrismTheme"

export interface LiveDemoProps {
    title: string | React.ReactNode
    componentName?: string
    code: string
    scope: Record<string, any>
}

export const LiveDemo = (props: LiveDemoProps): JSX.Element => {

    let {
        title,
        componentName = null,
        code,
        scope,
    } = props

    code = code.trim().replaceAll(/^\s{4}/gm, "")

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
            <LiveProvider
                code={code}
                scope={scope}
                noInline={false}
                theme={DocsPrismTheme}
            >
                <Box sx={DocsSx.LiveDemo.container}>
                    <Paper {...DocsSx.LiveDemo.editor}>
                        <LiveEditor />
                    </Paper>
                    <Paper {...DocsSx.LiveDemo.preview}>
                        <LivePreview />
                    </Paper>
                    <Box sx={DocsSx.LiveDemo.error}>
                        <LiveError />
                    </Box>
                </Box>
            </LiveProvider>
        </Paper>
    )
}
