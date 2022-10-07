import type { SvgIconProps } from "@mui/material"
// import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import type { ISxProps as SxProps } from "@app/theme"

export type ChevronProps = {
    expanded: boolean
}

export const Chevron = (props: ChevronProps): JSX.Element => {

    const sx: SxProps = {
        // color: (theme) => theme.palette.primary.main,
        // "&:hover": {
        //     color: "inherit",
        // },
    }

    const iconProps: SvgIconProps = {
        className: "docs-nav-chevron",
        fontSize: "small",
        sx: sx,
    }

    const { expanded = false } = props

    return !!expanded
        ? <ExpandMoreIcon   {...iconProps} />
        : <ChevronRightIcon {...iconProps} />
}
