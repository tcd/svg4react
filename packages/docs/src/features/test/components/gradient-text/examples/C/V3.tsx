import { Defs, Svg, Text, TSpan, LinearGradient, StopProps, G } from "svg4react"

const stops: StopProps[] = [
    { stopColor: "#0082b4", offset: "0%" },
    { stopColor: "#C8D97D", offset: "100%" },
]

export const V3 = (_props: unknown): JSX.Element => {
    return (
        <Svg size="300px" vb={[300,310]}>
            <Defs>
                <LinearGradient
                    id="mlxb-gradient-2"
                    coordinates={[0, 0, 0, "100%"]}
                    // gradientUnits="userSpaceOnUse"
                    stops={stops}
                />
            </Defs>
            <Text fill="url(#mlxb-gradient-2)">

                <TSpan
                    addSpace
                    fontSize="30"
                    coordinates={[75,30]}
                    fill="black"
                >
                    Dolorem sit
                </TSpan>
                <TSpan
                    addSpace
                    fontSize="50"
                    x="92"
                    dy="60"
                >
                    Velits
                </TSpan>
                <TSpan
                    addSpace
                    fontSize="20"
                    x="140"
                    dy="30"
                    fill="black"
                >
                    ad
                </TSpan>
                <TSpan fontSize="60">
                    <TSpan x="15" dy="50">
                        Obcaecati
                    </TSpan>
                    <TSpan x="15" dy="60" >
                        Obcaecati
                    </TSpan>
                    <TSpan x="40" dy="60" >
                        Dolorum
                    </TSpan>
                </TSpan>

            </Text>
        </Svg>
    )
}
