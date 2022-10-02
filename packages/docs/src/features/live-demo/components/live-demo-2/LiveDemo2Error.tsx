import { useContext } from "react"
import { Alert, AlertTitle, Box } from "@mui/material"
import { LiveContext } from "react-live"

import { DocsSx } from "@app/theme"

export const LiveDemo2Error = (_props: unknown): JSX.Element => {

    const {
        error,
    } = useContext(LiveContext)

    if (!!!error) {
        return <div />
    }

    return (
        <Box sx={DocsSx.LiveDemo2.errorWrapper}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>
        </Box>
    )
}
