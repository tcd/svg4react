import { Box, Typography } from "@mui/material"
import type { TypographyProps } from "@mui/material"

import { parseText } from "./parse-text"

export interface CustomTypographyProps extends Omit<TypographyProps, "children"> {
    children: string
}

export const CustomTypographyF = (props: CustomTypographyProps): JSX.Element => {

    const {
        children = "",
        ...otherProps
    } = props

    const segments = parseText(children)

    const $spans = segments.map((segment, i) => {
        const [
            text,
            format = "normal",
        ] = segment

        if (format === "code") {
            return (
                <Typography key={i} variant="code">
                    {text}
                </Typography>
            )
        }
        return (
            <Box key={i} component="span">
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
