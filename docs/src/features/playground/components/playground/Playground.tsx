import { useState } from "react"
import { useSelector } from "react-redux"
import { Box, Paper, Switch, FormControlLabel } from "@mui/material"
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

import { Selectors } from "@app/state"
import { DocsSx } from "@app/theme"
import { Card } from "@app/features/shared"

import { cleanCode, WithLiveProps } from "@app/features/live-demo"
import { LiveDemoError } from "@app/features/live-demo/components/live-demo/LiveDemoError"
import { LiveDemoPreview } from "@app/features/live-demo/components/live-demo/LiveDemoPreview"
import { PlaygroundEditor } from "./PlaygroundEditor"

const _Playground = (_props: WithLiveProps): JSX.Element => {

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

    const handleChange = () => {
        setShowRaw(!showRaw)
    }

    return (
        <Card id="playground" title="Playground">

            <FormControlLabel
                label="show raw output"
                control={<Switch />}
                checked={showRaw}
                onChange={handleChange}
            />

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

        </Card>
    )
}

export const Playground = withLive(_Playground)
