import { useState } from "react"
import { Divider, Paper } from "@mui/material"

import Grid from "@mui/material/Unstable_Grid2"

import { CustomTypographyF } from "@app/features/shared"
import { DocsSx } from "@app/theme"
import { LiveEditor2 } from "./LiveEditor2"
import { LiveDemo2Error } from "./LiveDemo2Error"
import { Preview } from "./preview"
import type { LiveDemo2Props } from "./types"

export const LiveDemo2Wrapped = (props: LiveDemo2Props): JSX.Element => {

    const { id, title } = props

    const [showRaw, setShowRaw] = useState(false)

    const handlePreviewChange = (show: boolean) => {
        setShowRaw(show)
    }

    return (
        <Paper id={id} {...DocsSx.LiveDemo2.root}>

            <CustomTypographyF
                text={title}
                gutterBottom
                variant="h4"
                sx={DocsSx.Card.title}
            />

            <Divider sx={{ width: "100%", mb: 4 }} />

            <Grid {...DocsSx.LiveDemo2.grid}>

                <Grid mobile={12} laptop={6}>
                    <Paper {...DocsSx.LiveDemo2.editor}>
                        <LiveEditor2 />
                    </Paper>
                </Grid>

                <Grid mobile={12} laptop={6}>
                    <Preview
                        showRaw={showRaw}
                        onChange={handlePreviewChange}
                    />
                </Grid>

            </Grid>

            <LiveDemo2Error />

        </Paper>
    )
}
