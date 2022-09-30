import { useState } from "react"
import { Box, Paper, Switch, FormControlLabel } from "@mui/material"
import { LiveProvider, withLive } from "react-live"

import { DocsSx } from "@app/theme"
import { trimCode } from "@app/util"
import { Card } from "@app/features/shared"
import { cleanCode, WithLiveProps } from "@app/features/live-demo"
import { LiveEditor } from "./LiveEditor"
import { LiveDemoError } from "./LiveDemoError"
import { LiveDemoPreview } from "./LiveDemoPreview"

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

const _LiveDemo = (props: CustomLiveDemoProps): JSX.Element => {

    const {
        id,
        title,
        componentName = null,
        scope,
        inline = false,
    } = props

    const passedCode = trimCode(props?.code)

    const [showRaw, setShowRaw] = useState(false)

    const handleToggleRaw = () => {
        setShowRaw(!showRaw)
    }

    return (
        <Card id={id} title={title} componentName={componentName}>

            <FormControlLabel
                label="show raw output"
                control={<Switch />}
                checked={showRaw}
                onChange={handleToggleRaw}
            />

            <LiveProvider
                code={passedCode}
                scope={scope}
                noInline={!!!inline}
                transformCode={(code) => cleanCode(code)}
            >

                <Box sx={DocsSx.LiveDemo.container}>

                    <Paper {...DocsSx.LiveDemo.editor}>
                        <LiveEditor />
                    </Paper>

                    <Paper {...DocsSx.LiveDemo.preview}>
                        <LiveDemoPreview showRaw={showRaw} />
                        <LiveDemoError />
                    </Paper>

                </Box>

            </LiveProvider>

        </Card>
    )
}

export const LiveDemo = withLive(_LiveDemo)
