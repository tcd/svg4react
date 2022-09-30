import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box, Paper, Switch, FormControlLabel, Button, Stack } from "@mui/material"
import { LiveProvider, withLive } from "react-live"
import * as svg4react from "svg4react"
import {
    Animate,
    AnimateMotion,
    AnimateTransform,
    Circle,
    Defs,
    Ellipse,
    G,
    Line,
    LinearGradient,
    Path,
    Polyline,
    Rect,
    Stop,
    Svg,
} from "svg4react"

import { Actions, Selectors } from "@app/state"
import { DocsSx } from "@app/theme"
import { Card } from "@app/features/shared"

import { cleanCode, WithLiveProps } from "@app/features/live-demo"
import { LiveDemoError } from "@app/features/live-demo/components/live-demo/LiveDemoError"
import { LiveDemoPreview } from "@app/features/live-demo/components/live-demo/LiveDemoPreview"
import { PlaygroundEditor } from "./PlaygroundEditor"

const _Playground = (_props: WithLiveProps): JSX.Element => {

    const dispatch = useDispatch()

    const code = useSelector(Selectors.Playground.value)

    const scope = {
        svg4react,
        Animate,
        AnimateMotion,
        AnimateTransform,
        Circle,
        Defs,
        Ellipse,
        G,
        Line,
        LinearGradient,
        Path,
        Polyline,
        Rect,
        Stop,
        Svg,
    }

    const [showRaw, setShowRaw] = useState(false)

    const handleToggleRaw = () => {
        setShowRaw(!showRaw)
    }

    const handleResetClick = () => {
        dispatch(Actions.Playground.resetValue())
    }

    return (
        // <Card id="playground" title="Playground">
        <Paper elevation={3} sx={{ p: 3 }}>

            <Stack
                direction="row"
                spacing={3}
                sx={{ pb: 3 }}
            >
                <Button
                    variant="contained"
                    size="small"
                    onClick={handleResetClick}
                >
                    reset
                </Button>

                <FormControlLabel
                    label="show raw output"
                    control={<Switch />}
                    checked={showRaw}
                    onChange={handleToggleRaw}
                />
            </Stack>

            <LiveProvider
                code={code}
                scope={scope}
                noInline={true}
                transformCode={cleanCode}
            >

                <Box sx={DocsSx.LiveDemo.container}>

                    <Paper {...DocsSx.LiveDemo.editor}>
                        <PlaygroundEditor />
                    </Paper>

                    <Paper {...DocsSx.LiveDemo.preview}>
                        <LiveDemoPreview showRaw={showRaw} />
                        <LiveDemoError />
                    </Paper>

                </Box>

            </LiveProvider>
        </Paper>
        // </Paper>
    )
}

export const Playground = withLive(_Playground)
