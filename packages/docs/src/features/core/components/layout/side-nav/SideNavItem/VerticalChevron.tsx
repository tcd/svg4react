import { useTheme } from "@mui/material"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export type VerticalChevronProps = {
    expanded: boolean
}

export const VerticalChevron = (props: VerticalChevronProps): JSX.Element => {

    const theme = useTheme()
    const color = theme.palette.mode == "dark" ? "white" : "#696969"

    const { expanded = false } = props

    return !!expanded
        ? <ExpandLessIcon sx={{ color: color }} />
        : <ExpandMoreIcon sx={{ color: color }} />
}
