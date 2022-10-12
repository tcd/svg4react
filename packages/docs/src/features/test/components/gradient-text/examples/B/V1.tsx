import { Svg, Text, LinearGradient, StopProps } from "svg4react"

const stops: StopProps[] = [
    { offset: "10%", stopColor: "hsl(50, 100%, 70%)"  },
    { offset: "90%", stopColor: "hsl(320, 100%, 50%)" },
]

export const V1 = (_props: unknown): JSX.Element => {
    return (
        <Svg size="25%" vb={[100,100]}>

            {/* Gradient */}
            <LinearGradient
                id="gr-simple"
                stops={stops}
                coordinates={[0, 0, "100%", "100%"]}
            />

            {/* Text */}
            <Text
                textAnchor="middle"
                // @ts-ignore: next-line
                coordinates={["50%"]}
                fill="url(#gr-simple)"
            >
                Text
            </Text>
        </Svg>
    )
}
