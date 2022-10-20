import { Box, Typography } from "@mui/material"
import type { TypographyProps } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export interface CustomTypographyProps extends Omit<TypographyProps, "children"> {
    spans: [
        text: string, sx?: SxProps,
    ][]
}

export const CustomTypography = (props: CustomTypographyProps): JSX.Element => {

    const {
        spans = [],
        ...otherProps
    } = props

    const $spans = spans.map((span, i) => {
        const [
            text,
            sx = {},
        ] = span
        return (
            <Box key={i} component="span" sx={sx}>
                {text}
            </Box>
        )
    })

    return (
        <Typography {...otherProps}>
            {$spans}
        </Typography>
    )
}
