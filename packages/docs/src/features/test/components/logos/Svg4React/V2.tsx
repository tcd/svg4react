import { Svg, Path, G, PathProps } from "svg4react"

const color1 = "#b0b043"
const color2 = "#fff"
const color3 = "#000"

const pathsProps: Record<"a" | "c" | "d", Partial<PathProps>> = {
    a: {
        id: "v2-a",
        fill: color1,
        commands: [
            ["M", [[-84.1487, -15.8513]]],
            ["a", [[22.4171, 22.4171, 0, 1, 0, 0, 31.7026]]],
            ["H", [84.1487]],
            ["a", [[22.4171, 22.4171, 0, 1, 0, 0, -31.7026]]],
            ["Z", []],
        ],
    },
    c: {
        id: "v2-c",
        opacity: 0.85,
        fill: color3,
        commands: [
            ["M", [[8.5,150]]],
            ["h", [283]],
            ["v", [100]],
            ["c", [[0, 23.5, -18, 41.5, -41.5, 41.5]]],
            ["H", [50]],
            ["c", [[-23.5, 0, -41.5, -18, -41.5, -41.5]]],
            ["Z", []],
        ],
    },
    d: {
        // id: "v2-d",
        fill: color2,
        d: "M5.482 31.319C2.163 28.001.109 23.419.109 18.358.109 8.232 8.322.024 18.443.024c10.126 0 18.339 8.208 18.339 18.334h-10.74c0-4.194-3.404-7.593-7.599-7.593-4.194 0-7.593 3.399-7.593 7.593 0 2.095.851 3.993 2.22 5.363h.005c1.375 1.38 2.52 1.779 5.368 2.231 5.066.527 9.648 2.054 12.966 5.372 3.319 3.319 5.373 7.901 5.373 12.962 0 10.126-8.213 18.339-18.339 18.339C8.322 62.625.109 54.412.109 44.286H10.85c0 4.194 3.399 7.598 7.593 7.598 4.195 0 7.599-3.404 7.599-7.598 0-2.095-.851-3.988-2.221-5.363h-.005c-1.375-1.375-3.348-1.849-5.373-2.226v-.005c-4.91-.753-9.643-2.054-12.961-5.373ZM73.452.024l-12.97 62.601h-10.74L36.782.024h10.74l7.6 36.663L62.712.024h10.74ZM91.792 25.952h18.334v18.334h.005c0 10.127-8.213 18.34-18.339 18.34-10.127 0-18.334-8.213-18.334-18.34V18.359h-.005C73.453 8.233 81.665.025 91.792.025c10.121 0 18.334 8.208 18.334 18.334H99.385c0-4.19-3.404-7.594-7.593-7.594-4.195 0-7.594 3.404-7.594 7.594v25.927c0 4.195 3.399 7.594 7.594 7.594 4.189 0 7.588-3.399 7.593-7.589v-7.593h-7.593V25.952Z",
        transform: [["matrix", [2, 0, 0, 2, 40, 158]]],
    },
}

export const V2 = (_props: unknown): JSX.Element => {
    return (
        <Svg size="300px" vb={[300]}>

            {/* black bottom shape */}
            <Path {...pathsProps.c} />

            <G strokeWidth="38.0086" stroke={color3}>
                <G id="v2-b" transform={[["translate", [150, 150]]]}>
                    <Path {...pathsProps.a} />                   {/* black line  9:00 to 3:00 */}
                    <use href="#v2-a" transform="rotate(45)"  /> {/* black line 10:00 to 4:00 */}
                    <use href="#v2-a" transform="rotate(90)"  /> {/* black line 12:00 to 6:00 */}
                    <use href="#v2-a" transform="rotate(135)" /> {/* black line  2:00 to 8:00 */}
                </G>
            </G>

            {/* blue lines */}
            <use href="#v2-b" />

            {/* black bottom overlay */}
            <use href="#v2-c" opacity=".85" />

            {/* SVG letters */}
            <Path {...pathsProps.d} />

        </Svg>
    )
}
