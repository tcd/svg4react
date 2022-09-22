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
    /** The code that should be rendered, apart from the user's edits */
    code: string
    /** Accepts custom globals that the `code` can use */
    scope: Record<string, any>
    /**
     * Doesn't evaluate and mount the inline code (Default: false).
     * Note: when using noInline whatever code you write must be a single expression (function, class component or some jsx) that can be returned immediately.
     * If you'd like to render multiple components, use noInline={true}
     *
     * @default false
     */
    noInline?: boolean
    /**
     * Trim & remove leading indentation from `code`.
     *
     * @default true
     */
    trimCode?: boolean

}

export const LiveDemo = (props: LiveDemoProps): JSX.Element => {

    let {
        title,
        componentName = null,
        code,
        scope,
        trimCode = true,
        noInline = false,
    } = props

    if (trimCode) {
        code = code.trim().replaceAll(/^\s{4}/gm, "")
    }

    if (componentName) {
        title = <DemoTitle componentName={componentName} />
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
                noInline={noInline}
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


const DemoTitle = ({ componentName }: { componentName: string }): JSX.Element => {
    return (
        <>
            <Box component="span" sx={DocsSx.LiveDemo.componentName}>&lt;{componentName}&gt;</Box>
            <Box component="span">&nbsp;</Box>
            <Box component="span">Demo</Box>
        </>
    )
}
