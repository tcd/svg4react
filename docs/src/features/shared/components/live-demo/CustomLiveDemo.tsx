import { useContext } from "react"
import { Box, Paper } from "@mui/material"
import {
    LiveProvider,
    LiveError,
    LivePreview,
    withLive,
    LiveContext,
} from "react-live"

import { DocsSx } from "@app/theme"
import { Card, SvgEditor } from "@app/features/shared"
import { DocsPrismTheme } from "./DocsPrismTheme"

import { WithLiveProps } from "./types"
import { trimCode } from "./trim-code"

export type CustomLiveDemoProps = {
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
} & WithLiveProps

const _CustomLiveDemo = (props: CustomLiveDemoProps): JSX.Element => {

    const {
        title,
        componentName = null,
        scope,
        // trimCode = true,
        noInline = false,
    } = props

    const passedCode = trimCode(props?.code)

    // useEffect(() => {
    //     console.log(props)
    // }, [props])

    // if (trimCode) {
    //     code = code.trim().replaceAll(/^\s{4}/gm, "")
    // }

    return (
        <Card title={title} componentName={componentName}>
            <LiveProvider
                code={passedCode}
                scope={scope}
                noInline={noInline}
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
