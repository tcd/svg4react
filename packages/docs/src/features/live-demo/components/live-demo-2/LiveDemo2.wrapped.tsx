import { useState } from "react"
import { Paper, Switch, FormControlLabel, Stack } from "@mui/material"

import Grid from "@mui/material/Unstable_Grid2/Grid2"

import { DocsSx } from "@app/theme"
import { LiveEditor2 } from "./LiveEditor2"
import { LiveDemo2Error } from "./LiveDemo2Error"
import { Live2DemoPreview } from "./LiveDemo2Preview"
import { LiveDemo2RawPreview } from "./LiveDemo2RawPreview"
import type { LiveDemo2Props } from "./types"

export const LiveDemo2Wrapped = (props: LiveDemo2Props): JSX.Element => {

    const { id } = props

    const [showRaw, setShowRaw] = useState(true)

    const handleToggleRaw = () => {
        setShowRaw(!showRaw)
    }

    const handleReset = (...args: Array<unknown>): void => {
        // reset the state of your app so the error doesn't happen again
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

            <Grid
                container
                spacing={4}
                direction={{ mobile: "column", laptop: "row" }}
            >

                <Grid mobile={12} laptop={6}>
                    <Paper {...DocsSx.LiveDemo2.editor}>
                        <LiveEditor2 />
                    </Paper>
                </Grid>

                <Grid mobile={12} laptop={6}>
                    <Paper {...DocsSx.LiveDemo2.preview}>
                        {showRaw ? <LiveDemo2RawPreview /> : <Live2DemoPreview /> }
                    </Paper>
                </Grid>

            </Grid>

            <LiveDemo2Error />
            {/* <Box sx={DocsSx.LiveDemo2.container}>

                <Paper {...DocsSx.LiveDemo2.editor}>
                    <LiveEditor2 />
                </Paper>

                <Paper {...DocsSx.LiveDemo2.preview}>
                    <ErrorBoundary onReset={handleReset} FallbackComponent={ErrorFallback} onError={handleBoundaryError}>
                        {showRaw ? <LiveDemo2RawPreview /> : <Live2DemoPreview /> }
                    </ErrorBoundary>
                </Paper>

            </Box> */}

        </Paper>
    )
}
