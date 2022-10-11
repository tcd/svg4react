import { useState } from "react"
import { Box } from "@mui/material"
import { Path, Svg, G, DrawCommand } from "svg4react"

import { V4 as SX } from "./sx"
import { BurgerProps } from "../shared"

const paths: Record<"top" | "middle" | "bottom", DrawCommand[]> = {
    top: [
        ["M", [[96, 0]]],
        ["L", [[72,24]]],
        ["C", [[68,28, 60,32, 56,32]]],
        ["L", [[40,32]]],
        ["C", [[36,32, 28,24, 24,24]]],
        ["L", [[ 0,24]]],
    ],
    middle: [
        ["M", [[56,32]]],
        ["L", [[0, 32]]],
    ],
    bottom: [
        ["M", [[96,64]]],
        ["L", [[72,40]]],
        ["C", [[68,36, 60,32, 56,32]]],
        ["L", [[40,32]]],
        ["C", [[36,32, 28,40, 24,40]]],
        ["L", [[ 0,40]]],
    ],
}

export const V5 = (props: BurgerProps): JSX.Element => {

    const { checked, onChange } = props

    // const [checked, setChecked] = useState(false)
    // const onChange = () => setChecked(!checked)
    const sx = checked ? SX.checked : SX.default

    return (
        <Box sx={{ width: "200px", height: "200px" }}>
            <Box className="burger-wrapper" sx={sx} onClick={onChange}>
                <Svg id="icon" viewBox="0 16 32 32" size="100%">
                    <G className="icon">
                        <Path className="top"    commands={paths.top} />
                        <Path className="middle" commands={paths.middle} />
                        <Path className="bottom" commands={paths.bottom} />
                    </G>
                </Svg>
            </Box>
        </Box>
    )
}
