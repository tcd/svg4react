import { Svg, Path, Rect, Circle } from "svg4react"

const TextTitle = ({ title }: { title: string }): JSX.Element => {
    return (
        <text x="0" y="-30">--------------- {title} ---------------</text>
    )
}

export const V2 = (_props: unknown): JSX.Element => {
    const styles = /*CSS*/`
        text { font-size: 9; }
        rect { fill: none; stroke: blue; }
    `
    return (
        <svg width="450px" height="300px" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "white" }}>

            <desc>Example PreserveAspectRatio - illustrates preserveAspectRatio attribute</desc>

            <style type="text/css">
                {styles}
            </style>

            <defs>
                <g id="smile">
                    <Rect points={[0.5,0.5]} size={[29,39]} style={{ fill: "black", stroke: "red" }} />
                    <Circle coordinates={[15,20]} r="10"  fill="yellow" />
                    <Circle coordinates={[12,17]} r="1.5" fill="black" />
                    <Circle coordinates={[17,17]} r="1.5" fill="black" />
                    <Path
                        commands={[
                            ["M", [[10,24]]],
                            ["A", [[8,8,0,0,0,20,24]]],
                        ]}
                        stroke="black"
                        strokeWidth="2"
                    />
                </g>
                <symbol id="29-59">
                    {/* <rect x='.5' y='.5' width='49' height='29'/> */}
                    <Rect points={[0.5,0.5]} size={[29,59]} />
                </symbol>
            </defs>

            <Rect points={[1]} size={[448,298]} />

            <text x="10" y="30">SVG to fit</text>
            <g transform="translate(20,40)"><use href="#smile" /></g>

            <text x="10" y="110">Viewport 1</text>
            <g transform="translate(10,120)"><rect x='.5' y='.5' width='49' height='29'/></g>

            <text x="10" y="180">Viewport 2</text>
            <g transform="translate(20,190)"><rect x='.5' y='.5' width='29' height='59'/></g>

            <g id="meet-group-1" transform="translate(100, 60)">
                <TextTitle title="meet" />
                <g>
                    <text y="-10">xMin*</text>
                    <rect x='.5' y='.5' width='49' height='29'/>
                    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 30 40" width="50" height="30">
                        <use href="#smile" />
                    </svg>
                </g>
                <g transform="translate(70,0)">
                    <text y="-10">xMid*</text>
                    <rect x='.5' y='.5' width='49' height='29'/>
                    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 30 40" width="50" height="30">
                        <use href="#smile" />
                    </svg>
                </g>
                <g transform="translate(0,70)">
                    <text y="-10">xMax*</text>
                    <rect x='.5' y='.5' width='49' height='29'/>
                    <svg preserveAspectRatio="xMaxYMax meet" viewBox="0 0 30 40" width="50" height="30">
                        <use href="#smile" />
                    </svg>
                </g>
            </g>

            <g id="meet-group-2" transform="translate(250, 60)">
                <TextTitle title="meet" />
                <g>
                    <text y="-10">*YMin</text>
                    <rect  x='.5' y='.5' width='29' height='59'/>
                    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 30 40" width="30" height="60">
                        <use href="#smile" />
                    </svg>
                </g>
                <g transform="translate(50, 0)">
                    <text y="-10">*YMid</text>
                    <rect x='.5' y='.5' width='29' height='59'/>
                    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 30 40" width="30" height="60">
                        <use href="#smile" />
                    </svg>
                </g>
                <g transform="translate(100, 0)">
                    <text y="-10">*YMax</text>
                    <rect x='.5' y='.5' width='29' height='59'/>
                    <svg preserveAspectRatio="xMaxYMax meet" viewBox="0 0 30 40" width="30" height="60">
                        <use href="#smile" />
                    </svg>
                </g>
            </g>

            <g id="slice-group-1" transform="translate(100, 220)">
                <TextTitle title="slice" />
                <g>
                    <text y="-10">xMin*</text>
                    <rect x='.5' y='.5' width='29' height='59'/>
                    <svg preserveAspectRatio="xMinYMin slice" viewBox="0 0 30 40" width="30" height="60">
                        <use href="#smile" />
                    </svg>
                </g>
                <g transform="translate(50,0)">
                    <text y="-10">xMid*</text>
                    <rect x='.5' y='.5' width='29' height='59'/>
                    <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 30 40" width="30" height="60">
                        <use href="#smile" />
                    </svg>
                </g>
                <g transform="translate(100,0)">
                    <text y="-10">xMax*</text>
                    <rect x='.5' y='.5' width='29' height='59'/>
                    <svg preserveAspectRatio="xMaxYMax slice" viewBox="0 0 30 40" width="30" height="60">
                        <use href="#smile" />
                    </svg>
                </g>
            </g>

            <g id="slice-group-2" transform="translate(250, 220)">
                <TextTitle title="slice" />
                <g>
                    <text y="-10">*YMin</text>
                    <rect x='.5' y='.5' width='49' height='29'/>
                    <svg preserveAspectRatio="xMinYMin slice" viewBox="0 0 30 40" width="50" height="30">
                        <use href="#smile" />
                    </svg>
                </g>
                <g transform="translate(70,0)">
                    <text y="-10">*YMid</text>
                    <rect x='.5' y='.5' width='49' height='29'/>
                    <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 30 40" width="50" height="30">
                        <use href="#smile" />
                    </svg>
                </g>
                <g transform="translate(140,0)">
                    <text y="-10">*YMax</text>
                    <rect x='.5' y='.5' width='49' height='29'/>
                    <svg preserveAspectRatio="xMaxYMax slice" viewBox="0 0 30 40" width="50" height="30">
                        <use href="#smile" />
                    </svg>
                </g>
            </g>
        </svg>
    )
}
