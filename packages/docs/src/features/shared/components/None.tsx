import Color from "color"
import { Typography } from "@mui/material"
import type { TypographyProps } from "@mui/material"

export type NoneProps = {
    message?: string
}

export const None = (props: NoneProps): JSX.Element => {
    const {
        message = "none",
    } = props
    return (
        <Typography component="small" {...typographyProps}>
            {message}
        </Typography>
    )
}

// =============================================================================
// Misc.
// =============================================================================

const typographyProps: TypographyProps = {
    variant: "caption",
    sx: {
        color: Color("#6c757d").darken(0.1).string(),
        fontStyle: "italic",
        ml: 0.25,
    },
}
