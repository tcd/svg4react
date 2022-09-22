import { Box, Paper } from "@mui/material"
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview,
} from "react-live"

import { DocsSx } from "@app/theme"
import { DocsPrismTheme } from "./DocsPrismTheme"

export interface LiveDemoProps {
    code: string
    scope: Record<string, any>
}

export const LiveDemo = (props: LiveDemoProps): JSX.Element => {

    const {
        code,
        scope,
    } = props

    return (
        <Box sx={DocsSx.LiveDemo.root}>
            <LiveProvider
                code={code}
                scope={scope}
                noInline={false}
                theme={DocsPrismTheme}
            >
                <Box sx={DocsSx.LiveDemo.container}>
                    <Box sx={DocsSx.LiveDemo.editor}>
                        <LiveEditor />
                    </Box>
                    <Paper
                        sx={DocsSx.LiveDemo.preview}
                        elevation={3}
                    >
                        <LivePreview />
                    </Paper>
                    <Box sx={DocsSx.LiveDemo.error}>
                        <LiveError />
                    </Box>
                </Box>
            </LiveProvider>
        </Box>
    )
}
