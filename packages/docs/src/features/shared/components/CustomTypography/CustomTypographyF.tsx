import { Box, Typography } from "@mui/material"
import type { TypographyProps } from "@mui/material"

import { ISxProps as SxProps } from "@app/theme"
import { parseText } from "./parse-text"

export interface CustomTypographyFProps extends Omit<TypographyProps, "children"> {
    text: string
}

export const CustomTypographyF = (props: CustomTypographyFProps): JSX.Element => {

    const {
        text = "",
        sx = defaultSx,
        ...otherProps
    } = props

    const segments = parseText(text)

    const $spans = segments.map((segment, i) => {
        const [
            text,
            format = "normal",
        ] = segment

        if (format === "code") {
            return (
                <code key={i} className="code-title">
                    {text}
                </code>
            )
        }
        return (
            <Box key={i} component="span">
                {text}
            </Box>
        )
    })

    return (
        <Typography sx={sx} {...otherProps}>
            {$spans}
        </Typography>
    )
}

// =============================================================================

const defaultSx: SxProps = {
    "& code": {
        display: "inline",
        whiteSpace: "pre",
        // fontSize: "85%",
        fontOpticalSizing: "auto",
        // fontStyle: "normal",
        // fontStretch: "normal",
        // lineHeight: "initial",
        padding: "0.2em 0.4em",
        margin: 0,
        borderRadius: "6px",
        backgroundColor: (theme) => theme.palette.mode === "dark" ? "#343942" : "#eff1f3",
        color: (theme) => theme.palette.mode === "dark" ? "#fff" : "#000000de",
    },
}
