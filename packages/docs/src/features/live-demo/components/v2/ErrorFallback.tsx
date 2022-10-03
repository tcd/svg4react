import { FallbackProps } from "react-error-boundary"
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Typography,
} from "@mui/material"

export const ErrorFallback = (props: FallbackProps): JSX.Element => {

    const {
        error,
        resetErrorBoundary,
    } = props

    const $alertAction = (
        <Button
            variant="contained"
            onClick={resetErrorBoundary}
            color="error"
        >
            Reset Demo
        </Button>
    )

    return (
        <Box role="alert">
            <Alert severity="error" action={$alertAction} sx={{ p: 3 }}>
                <AlertTitle>Something went wrong:</AlertTitle>
                <Typography variant="code" sx={{ my: 2 }}>
                    {error.message}
                </Typography>
            </Alert>
        </Box>
    )
}
