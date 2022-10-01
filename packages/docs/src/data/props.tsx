const numberOrString: React.ReactNode = (
    <div className="hl__root">
        <span className="hl__type">number</span>
        &nbsp;
        <span className="hl__operator">|</span>
        &nbsp;
        <span className="hl__type">string</span>
    </div>
)

const circleCoordinates: React.ReactNode = (
    <div className="hl__root">
        <span>[</span>
        <span className="hl__var">cx</span>
        <span className="hl__type">: number</span>
        <span>,&nbsp;</span>
        <span className="hl__var">cy</span>
        <span className="hl__type">: number</span>
        <span>]</span>
    </div>
)

export const PropData: Record<Svg4ReactComponent, PropData[]> = {
    Circle: [
        {
            name: "coordinates",
            type: circleCoordinates,
            description: "The x and y axis coordinates of the center of the circle.\n\nWill override `cx` and `cy`.",
        },
        {
            name: "cx",
            type: numberOrString,
            description: "The x-axis coordinate of the center of the circle.",
        },
        {
            name: "cy",
            type: numberOrString,
            description: "The y-axis coordinate of the center of the circle.",
        },
        {
            name: "r",
            type: numberOrString,
            description: "The radius of the circle.\n\nA value lower or equal to zero disables rendering of the circle.",
        },
        {
            name: "pathLength",
            type: numberOrString,
            description: "The total length for the circle's circumference, in user units.",
        },
    ],
    Line: [
        {
            name: "coordinates",
            type: "[x1, y1, x2, y2]",
            description: `
Values, in order, as a string or number, for:

- \`x1\` - x-axis start
- \`y1\` - y-axis start
- \`x2\` - x-axis end
- \`y2\` - y-axis end
            `.trim(),
        },
        {
            name: "pathLength",
            type: "number",
            description: "Defines the total path length in user units.",
            default: "none",
        },
    ],
    Svg: [
        {
            name: "vb",
            type: "[width: number, height?: number]",
            description: `
Shorthand for the setting the last two values of \`viewBox\`

If only one value is passed, it will be assigned to both \`width\` and \`height\`.

\`minX\` and \`minY\` are set to 0, resulting in \`"0 0 width height"\`.

Will **not** override \`viewBox\` if both are passed.
            `.trim(),
        },
        {
            name: "size",
            type: "string",
            description: "Shorthand for setting both `width` and `height`.",
        },
        {
            name: "viewBox",
            type: "string",
            description: "The SVG viewport coordinates for the current SVG fragment.\n\nSee [MDN Web Docs - viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).",
        },
        {
            name: "preserveAspectRatio",
            type: '"none" | `${"xMidYMin"|"xMinYMin"|"xMaxYMin"|"xMinYMid"|"xMidYMid"|"xMaxYMid"|"xMinYMax"|"xMidYMax"|"xMaxYMax"} ${"meet"|"slice"}`',
            description: "How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.\n\nSee [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio).",
            default: '"xMidYMid meet"',
        },
    ],
    Animate: [],
    AnimateMotion: [],
    AnimateTransform: [],
    Defs: [],
    Ellipse: [],
    G: [],
    LinearGradient: [],
    Path: [],
    Polyline: [],
    Rect: [],
    Stop: [],
}
