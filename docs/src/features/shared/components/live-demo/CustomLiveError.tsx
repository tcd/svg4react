import { Alert, AlertTitle, Box } from "@mui/material"
import {
    LiveContext,
} from "react-live"

import { DocsSx } from "@app/theme"
import { useContext } from "react"

export const CustomLiveError = (_props: unknown): JSX.Element => {

    const {
        error,
    } = useContext(LiveContext)

    if (!!!error) {
        return null
    }

    return (
        <Box sx={DocsSx.LiveDemo.errorWrapper}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>
        </Box>
    )
}
