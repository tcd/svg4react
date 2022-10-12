// import { Box } from "@mui/material"
import { Svg, G, Rect } from "svg4react"

/**
 * [1. Cube unit with SVG shapes and transforms - Mariana Beldi (CodePen)](https://codepen.io/marianab/pen/XWWQbYP)
 */
export const B = (_props: unknown): JSX.Element => {
    return (
        // <Box>
        <Svg viewBox="-130 -20 300 100">
            <G
                stroke="#0079ad"
                strokeMiterlimit="0"
                fillOpacity="0.9"
            >
                <Rect size={[21, 24]} fill="#00affa" transform="skewY(30)"/>
                <Rect size={[21, 24]} fill="#008bc7" transform="skewY(-30) translate(21, 24.3)"/>
                <Rect size={[21, 21]} fill="#009CDE" transform="scale(1.41, 0.81) rotate(45) translate(0, -21)"/>
            </G>
        </Svg>
        // </Box>
    )
}
