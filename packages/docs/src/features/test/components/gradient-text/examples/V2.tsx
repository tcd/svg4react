import { Svg, Text, LinearGradient, StopProps } from "svg4react"

import { Card } from "@app/features/shared"

const stops: StopProps[] = [
    { offset: "10%", stopColor: "hsl(50, 100%, 70%)"  },
    { offset: "90%", stopColor: "hsl(320, 100%, 50%)" },
]

export const V2 = (_props: unknown): JSX.Element => {
    return (
        <Card title="yoksel - How to Create (Animated) Text Fills">
            {/* https://tympanus.net/codrops-playground/yoksel/aIjeerkS/editor/html,css,result */}
            <a href="How to Create (Animated) Text Fills">How to Create (Animated) Text Fills</a>
            <br />
            <Svg size="25%" vb={[100,100]}>

                {/* Gradient */}
                <LinearGradient
                    id="gr-simple"
                    stops={stops}
                    coordinates={[0, "100%", 0, "100%"]}
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
        </Card>
    )
}
