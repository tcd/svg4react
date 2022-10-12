import { Box } from "@mui/material"
import {
    Defs,
    G,
    LinearGradient,
    Path,
    StopProps,
    Svg,
} from "svg4react"

import "./d.scss"

const gradientStops: StopProps[] = [
    { offset: "0%",   stopColor: "#8b09e8", stopOpacity: 1.0 },
    { offset: "50%",  stopColor: "#326be5", stopOpacity: 0.9 },
    { offset: "100%", stopColor: "#44b9d6", stopOpacity: 0.6 },
]

/**
 * [Cube stack animation - Adrien](https://codepen.io/gingifruden/pen/pojPGNR)
 */
export const D = (_props: unknown): JSX.Element => {
    return (
        <Box>
            <Defs>

            </Defs>

            {/* Cube 1  */}
            <svg className="cube" width="87" height="100" viewBox="0 0 87 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24.5878L43.2009 0L86.4018 24.8176L43.2009 49.6351L0 24.5878Z" fill="#A69CE7"/>
                <path d="M0 24.5878L43.2009 49.6351V99.5L0 74.2229V24.5878Z" fill="#A69CE7"/>
                <path className="light" d="M0 24.5878L43.2009 49.6351V99.5L0 74.2229V24.5878Z" fill="url(#paint0_radial)" fillOpacity="0.3"/>
                <path d="M0 24.5L43 49.5V50L0 25V24.5Z" fill="url(#paint1_linear)" fillOpacity="0.3"/>
                <path d="M43.2009 49.6351L86.4019 24.8176V74.4527L43.2009 99.5V49.6351Z" fill="#A69CE7"/>
                <path d="M43.2009 49.6351L86.4019 24.8176V74.4527L43.2009 99.5V49.6351Z" fill="black" fillOpacity="0.2"/>
                <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22 37.5) rotate(90) scale(48.5 43.417)">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear" x1="0.5" y1="24.5" x2="43" y2="49.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="0.520833" stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* Cube 2 */}
            <svg className="cube" width="87" height="100" viewBox="0 0 87 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24.5878L43.2009 0L86.4018 24.8176L43.2009 49.6351L0 24.5878Z" fill="#A69CE7"/>
                <path d="M0 24.5878L43.2009 49.6351V99.5L0 74.2229V24.5878Z" fill="#A69CE7"/>
                <path className="light" d="M0 24.5878L43.2009 49.6351V99.5L0 74.2229V24.5878Z" fill="url(#paint0_radial)" fillOpacity="0.3"/>
                <path d="M0 24.5L43 49.5V50L0 25V24.5Z" fill="url(#paint1_linear)" fillOpacity="0.3"/>
                <path d="M43.2009 49.6351L86.4019 24.8176V74.4527L43.2009 99.5V49.6351Z" fill="#A69CE7"/>
                <path d="M43.2009 49.6351L86.4019 24.8176V74.4527L43.2009 99.5V49.6351Z" fill="black" fillOpacity="0.2"/>
                <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22 37.5) rotate(90) scale(48.5 43.417)">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear" x1="0.5" y1="24.5" x2="43" y2="49.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="0.520833" stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* Cube 3 */}
            <svg className="cube" width="87" height="100" viewBox="0 0 87 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24.5878L43.2009 0L86.4018 24.8176L43.2009 49.6351L0 24.5878Z" fill="#A69CE7"/>
                <path d="M0 24.5878L43.2009 49.6351V99.5L0 74.2229V24.5878Z" fill="#A69CE7"/>
                <path className="light" d="M0 24.5878L43.2009 49.6351V99.5L0 74.2229V24.5878Z" fill="url(#paint0_radial)" fillOpacity="0.3"/>
                <path d="M0 24.5L43 49.5V50L0 25V24.5Z" fill="url(#paint1_linear)" fillOpacity="0.3"/>
                <path d="M43.2009 49.6351L86.4019 24.8176V74.4527L43.2009 99.5V49.6351Z" fill="#A69CE7"/>
                <path d="M43.2009 49.6351L86.4019 24.8176V74.4527L43.2009 99.5V49.6351Z" fill="black" fillOpacity="0.2"/>
                <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22 37.5) rotate(90) scale(48.5 43.417)">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear" x1="0.5" y1="24.5" x2="43" y2="49.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="0.520833" stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </Box>
    )
}
