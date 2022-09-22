import { Svg, Path } from "svg4react"
import { LiveDemo } from "@app/features/shared"

const code = `const pathProps= {
    fill: "indianred",
    commands: [
        ["M", [
            [36, 0],
            [0, 21.91],
        ]],
        ["v", [67.83]],
        ["l", [
            [18.93, 10.3],
            [0.13, -29.09],
            [16.93, 10.11],
            [36, -21.98],
        ]],
        ["V", [22.83]],
        ["L", [[36, 0]]],
        ["Z", []],
        ["m", [[17, 51.91]]],
        ["l", [
            [-17,  10.12],
            [-17, -10.12],
        ]],
        ["v", [-18.95]],
        ["l", [
            [17, -9.91],
            [17,  9.91],
        ]],
        ["v", [18.95]],
        ["Z", []],
    ],
}

render (
    <Svg size="110px" viewBox="0 0 72 100.04">
        <Path {...pathProps} />
    </Svg>
)`

export const Example101 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            title="Example #101"
            code={code}
            scope={scope}
            noInline
            trimCode={false}
        />
    )
}
