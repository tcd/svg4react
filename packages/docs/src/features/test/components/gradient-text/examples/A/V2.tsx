import { Defs, Svg, Text, TSpan, LinearGradient, StopProps } from "svg4react"

const stops: StopProps[] = [
    { stopColor: "#FF5B99", offset: "0%" },
    { stopColor: "#FF5447", offset: "20%" },
    { stopColor: "#FF7B21", offset: "40%" },
    { stopColor: "#EAFC37", offset: "60%" },
    { stopColor: "#4FCB6B", offset: "80%" },
    { stopColor: "#51F7FE", offset: "100%" },
]

export const V2 = (_props: unknown): JSX.Element => {
    return (
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
                <TSpan addSpace fontSize="30" coordinates={[0,30]}>
                    gradient
                </TSpan>
                <TSpan addSpace fontSize="65" x="0" dy="60">
                    text
                </TSpan>
                <TSpan fontSize="20" x="0" dy="20">all up in here</TSpan>
            </Text>
        </Svg>
    )
}
