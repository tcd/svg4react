import { Box, Paper } from "@mui/material"
import {
    LiveProvider,
    LiveError,
    LivePreview,
    withLive,
} from "react-live"

import { DocsSx } from "@app/theme"
import { trimCode } from "@app/util"
import { Card, SvgEditor } from "@app/features/shared"
import { DocsPrismTheme } from "./DocsPrismTheme"

import { WithLiveProps } from "./types"

export type CustomLiveDemoProps = {
    title: string | React.ReactNode
    componentName?: string
    /** The code that should be rendered, apart from the user's edits */
    code: string
    /** Accepts custom globals that the `code` can use */
    scope: Record<string, any>
    /**
     * Evaluate and mount the inline code.
     *
     * @default false
     */
    inline?: boolean
} & WithLiveProps

const _CustomLiveDemo = (props: CustomLiveDemoProps): JSX.Element => {

    const {
        title,
        componentName = null,
        scope,
        inline = false,
    } = props

    const passedCode = trimCode(props?.code)

    return (
        <Card title={title} componentName={componentName}>
            <LiveProvider
                code={passedCode}
                scope={scope}
                noInline={!!!inline}
                theme={DocsPrismTheme}
            >
                <Box sx={DocsSx.LiveDemo.container}>
                    <Paper {...DocsSx.LiveDemo.editor}>
                        <SvgEditor />
                    </Paper>
                    <Paper {...DocsSx.LiveDemo.preview}>
                        <LivePreview />
                    </Paper>
                    <Box sx={DocsSx.LiveDemo.error}>
                        <LiveError />
                    </Box>
                </Box>
            </LiveProvider>
        </Card>
    )
}

export const LiveDemo = withLive(_CustomLiveDemo)
