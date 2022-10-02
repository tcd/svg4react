import { useState } from "react"
import { Box, Paper, Switch, FormControlLabel, Stack } from "@mui/material"
import { LiveProvider, withLive } from "react-live"
import { ErrorBoundary } from "react-error-boundary"

import { DocsSx } from "@app/theme"
import { trimCode } from "@app/util"
import { Card } from "@app/features/shared"
import { cleanCode } from "@app/features/live-demo"
import { LiveEditor2 } from "./LiveEditor2"
import { LiveDemo2Error } from "./LiveDemo2Error"
import { Live2DemoPreview } from "./LiveDemo2Preview"
import { LiveDemo2RawPreview } from "./LiveDemo2RawPreview"
import { ErrorFallback } from "./ErrorFallback"
import type { LiveDemo2Props } from "./types"

export const LiveDemo2Wrapped = (props: LiveDemo2Props): JSX.Element => {

    const {
        id,
        title,
        componentName = null,
    } = props

    const [showRaw, setShowRaw] = useState(true)

    const handleToggleRaw = () => {
        setShowRaw(!showRaw)
    }

    const handleReset = (...args: Array<unknown>): void => {
        // reset the state of your app so the error doesn't happen again
    }

    const handleBoundaryError = (error: Error, info: { componentStack: string }): void => {

    }

    return (
        <Paper id={id} {...DocsSx.LiveDemo2.root}>

            <Stack direction="row" sx={{ mb: 2 }}>
                <FormControlLabel
                    label="show raw output"
                    control={<Switch />}
                    checked={showRaw}
                    onChange={handleToggleRaw}
                />
            </Stack>


            <Box sx={DocsSx.LiveDemo2.container}>

                <Paper {...DocsSx.LiveDemo2.editor}>
                    <LiveEditor2 />
                </Paper>

                <Paper {...DocsSx.LiveDemo2.preview}>
                    <ErrorBoundary onReset={handleReset} FallbackComponent={ErrorFallback} onError={handleBoundaryError}>
                        {showRaw ? <LiveDemo2RawPreview /> : <Live2DemoPreview /> }
                    </ErrorBoundary>
                </Paper>

                <LiveDemo2Error />
            </Box>

        </Paper>
    )
}
