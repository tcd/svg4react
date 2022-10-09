import { Defs, Svg, Text, LinearGradient, StopProps } from "svg4react"

import { Card } from "@app/features/shared"

const stops: StopProps[] = [
    { stopColor: "#FF5B99", offset: "0%" },
    { stopColor: "#FF5447", offset: "20%" },
    { stopColor: "#FF7B21", offset: "40%" },
    { stopColor: "#EAFC37", offset: "60%" },
    { stopColor: "#4FCB6B", offset: "80%" },
    { stopColor: "#51F7FE", offset: "100%" },
]

export const V1 = (_props: unknown): JSX.Element => {
    return (
        <Card title="Brenna O'Brien - CodePen">
            <a href="https://codepen.io/brenna/pen/mybQVx">SVG Gradient Filled Text</a>
            <br />
            <Svg size="200px" vb={[125,115]}>
                <Defs>
                    <LinearGradient
                        id="rainbow"
                        // x1="0"
                        // x2="0"
                        // y1="0"
                        // y2="100%"
                        coordinates={[0, 0, 0, "100%"]}
                        gradientUnits="userSpaceOnUse"
                        stops={stops}
                    />
                </Defs>
                <Text fill="url(#rainbow)">
                    <tspan
                        fontSize="30"
                        x="0"
                        y="30">
                        gradient
                    </tspan>
                    <tspan fontSize="65" x="0" dy="60">text</tspan>
                    <tspan fontSize="20" x="0" dy="20">all up in here</tspan>
                </Text>
            </Svg>
        </Card>
    )
}
