import { Box, Tooltip } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export const PropNameCell = (props: { prop: PropData }): JSX.Element => {

    const {
        prop: {
            name,
            required = false,
        },
    } = props

    if (required !== true) {
        return (
            <code style={{ display: "inline" }}>
                {name}
            </code>
        )
    }

    return (
        <Tooltip title="required" placement="top-start">
            <code style={{ display: "inline" }}>
                {name}
                <Box component="sup" sx={requiredSx}>
                    *
                </Box>
            </code>
        </Tooltip>
    )
}

const requiredSx: SxProps = {
    color: (theme) => theme.palette.error.main,
    pointerEvents: "none",
}
