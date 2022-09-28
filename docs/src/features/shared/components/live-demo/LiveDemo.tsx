import { Box, Paper } from "@mui/material"
import {
    LiveProvider,
    LivePreview,
    withLive,
} from "react-live"

import { DocsSx } from "@app/theme"
import { trimCode } from "@app/util"
import { Card } from "@app/features/shared"
import { cleanCode, SvgEditor } from "@app/features/monaco"
import { DocsPrismTheme } from "./DocsPrismTheme"
import { WithLiveProps } from "./types"
import { CustomLiveError } from "./CustomLiveError"

export type CustomLiveDemoProps = {
    id: string
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
        id,
        title,
        componentName = null,
        scope,
        inline = false,
    } = props

    const passedCode = trimCode(props?.code)

    return (
        <Card id={id} title={title} componentName={componentName}>
            <LiveProvider
                code={passedCode}
                scope={scope}
                noInline={!!!inline}
                theme={DocsPrismTheme}
                transformCode={(code) => cleanCode(code)}
            >
                <Box sx={DocsSx.LiveDemo.container}>
                    <Paper {...DocsSx.LiveDemo.editor}>
                        <SvgEditor />
                    </Paper>
                    <Paper {...DocsSx.LiveDemo.preview}>
                        <LivePreview />
                        <CustomLiveError />
                    </Paper>
                </Box>
            </LiveProvider>
        </Card>
    )
}

export const LiveDemo = withLive(_CustomLiveDemo)
