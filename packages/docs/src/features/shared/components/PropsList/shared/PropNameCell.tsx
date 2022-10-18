import { Box, Tooltip, Typography } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { DarkPlusColors, LightPlusColors } from "@app/util"

const requiredSx: SxProps = {
    color: (theme) => theme.palette.error.main,
    pointerEvents: "none",
}

export type PropNameCellProps = {
    prop: PropData
    sx?: SxProps
}

export const PropNameCell = (props: PropNameCellProps): JSX.Element => {

    const {
        prop: {
            name,
            required = false,
        },
        sx = {
            color: (theme) => theme.palette.mode === "dark" ? DarkPlusColors.variable : LightPlusColors.variable,
        },
    } = props

    if (required !== true) {
        return (
            <Typography variant="code" sx={sx}>
                {name}
            </Typography>
        )
    }

    return (
        <Tooltip title="required" placement="top-start">
            <Typography variant="code" sx={sx}>
                {name}
                <Box component="sup" sx={requiredSx}>
                    *
                </Box>
            </Typography>
        </Tooltip>
    )
}
