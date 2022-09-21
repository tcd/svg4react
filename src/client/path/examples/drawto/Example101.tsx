import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "../ExampleCard"

const pathPropsAdobe: PathProps = {
    id: "example-101-adobe",
    fill: "indianred",
    commands: [
        ["M", [[36, 0]]],
        ["L", [[0, 21.91]]],
        ["V", [89.74]],
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

const pathPropsSvgOmg: PathProps = {
    id: "example-101-svgOmg",
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
        // ---------------------------------------------------------------------
        // ["l", [
        //     [-17,  10.12],
        //     [-17, -10.12],
        // ]],
        // ["v", [-18.95]],
        // ---------------------------------------------------------------------
        ["L", [
            [36, 62.03],
            [19, 51.91],
        ]],
        ["V", [32.96]],
        // ---------------------------------------------------------------------
        ["l", [
            [17, -9.91],
            [17,  9.91],
        ]],
        ["v", [18.95]],
        ["Z", []],
    ],
}

export const Example101 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="Example #101" url="">
            <svg
                // style={{ width: "100px", height: "100px" }}
                x={0}
                y={0}
                width="110px"
                height="110px"
                viewBox="0 0 72 100.04"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path {...pathPropsAdobe} />
            </svg>
            <svg
                x={0}
                y={0}
                width="110px"
                height="110px"
                viewBox="0 0 72 100.04"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path {...pathPropsSvgOmg} />
            </svg>
        </ExampleCard>
    )
}
