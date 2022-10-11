import { useState } from "react"
import { Box } from "@mui/material"
import { Path, Svg, G, Defs } from "svg4react"

import { V4 as SX } from "./sx"
import { paths } from "./paths"
import { gooey } from "./gooey"

export const V4 = (_props: unknown): JSX.Element => {

    const [checked, setChecked] = useState(false)
    const onClick = () => setChecked(!checked)
    const sx = checked ? SX.checked : SX.default

    return (
        <Box sx={{ width: "200px", height: "200px" }}>
            <Box className="burger-wrapper" sx={sx} onClick={onClick}>
                <Svg id="icon" viewBox="0 16 32 32" size="100%">
                    <Defs>
                        <filter id="gooey">
                            <feGaussianBlur {...gooey.gaussianBlur} />
                            <feColorMatrix  {...gooey.colorMatrix} />
                            <feBlend        {...gooey.blend} />
                        </filter>
                    </Defs>
                    <G className="icon">
                        <Path className="top"    d={paths.top} />
                        <Path className="middle" d={paths.middle} />
                        <Path className="bottom" d={paths.bottom} />
                    </G>
                </Svg>
            </Box>
        </Box>
    )
}
