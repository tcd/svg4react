export const PropData: Record<Svg4ReactComponent, PropData[]> = {
    Circle: [
        {
            name: "coordinates",
            type: "[cx: number, cy: number]",
            description: "The x and y axis coordinates of the center of the circle.\n\nWill override `cx` and `cy`.",
        },
        {
            name: "cx",
            type: "number | string",
            description: "The x-axis coordinate of the center of the circle.",
        },
        {
            name: "cy",
            type: "number | string",
            description: "The y-axis coordinate of the center of the circle.",
        },
        {
            name: "r",
            type: "number | string",
            description: "The radius of the circle.\n\nA value lower or equal to zero disables rendering of the circle.",
        },
        {
            name: "pathLength",
            type: "number | string",
            description: "The total length for the circle's circumference, in user units.",
        },
    ],
    Ellipse: [
        {
            "name": "coordinates",
            "description": "Shorthand for `cx` and `cy`.\n\nThe x and y axis coordinates of the center of the Ellipse.\n\n**Will** override `cx` and `cy`",
            "type": "[cx: number, cy: number]",
        },
        {
            "name": "cx",
            "description": "The x-axis coordinate of the center of the ellipse.",
            type: "number | string",
        },
        {
            "name": "cy",
            "description": "The y-axis coordinate of the center of the ellipse.",
            type: "number | string",
        },
        {
            "name": "pathLength",
            "description": "This attribute lets specify the total length for the path, in user units.",
            type: "number | string",
        },
        {
            "name": "radius",
            "description": "Shorthand for `rx` and `ry`.\n\nThe radius of the ellipse on the x and y axis.\n\n**Will** override `rx` and `ry`",
            "type": "[cx: number, cy: number]",
        },
        {
            "name": "rx",
            "description": "The radius of the ellipse on the x axis.",
            type: "number | string",
        },
        {
            "name": "ry",
            "description": "The radius of the ellipse on the y axis.",
            type: "number | string",
        },
    ],
    Line: [
        {
            name: "coordinates",
            type: `
[
    x1: number | string,
    y1: number | string,
    x2: number | string,
    y2: number | string,
]
`.trim(),
            description: `
Values, in order, as a string or number, for:

- \`x1\` - x-axis start\n
- \`y1\` - y-axis start\n
- \`x2\` - x-axis end\n
- \`y2\` - y-axis end\n
            `.trim(),
        },
        {
            name: "pathLength",
            type: "number",
            description: "Defines the total path length in user units.",
            default: "none",
        },
    ],
    LinearGradient: [
        {
            "name": "gradientTransform",
            "description": "This attribute provides additional [transformation](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) to the gradient coordinate system.\n\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientTransform)",
            "type": "string",
        },
        {
            "name": "gradientUnits",
            "default": "\"objectBoundingBox\"",
            "description": "Defines the coordinate system for attributes `x1`, `x2`, `y1`, `y2`.\n\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientUnits)",
            "type": "\"userSpaceOnUse\" | \"objectBoundingBox\"",
        },
        {
            "name": "href",
            "description": "This attribute defines a reference to another `<linearGradient>` element that will be used as a template.\n\n[MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href)",
            "type": "string",
        },
        {
            "name": "spreadMethod",
            "default": "\"pad\"",
            "description": "This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.\n\n[MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/spreadMethod)",
            "type": "\"repeat\" | \"pad\" | \"reflect\"",
        },
        {
            "name": "x1",
            "default": "\"0%\"",
            "description": "This attribute defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn.\n\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1)",
            "type": "string | number",
        },
        {
            "name": "x2",
            "default": "\"100%\"",
            "description": "This attribute defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.\n\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2)",
            "type": "string | number",
        },
        {
            "name": "y1",
            "default": "\"0%\"",
            "description": "This attribute defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn.\n\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1)",
            "type": "string | number",
        },
        {
            "name": "y2",
            "default": "\"0%\"",
            "description": "This attribute defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.\n\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2)",
            "type": "string | number",
        },
    ],
    Polyline: [
        {
            name: "points",
            type: "[x: number, y: number][]",
            description: "The list of points (pairs of x,y absolute coordinates) required to draw the polyline.",
            default: "[]",
        },
        {
            name: "pathLength",
            type: "number",
            description: "Defines the total path length in user units.",
            default: "none",
        },
    ],
    Stop: [
        {
            "name": "color",
            "description": "Used to provide a potential indirect value (currentcolor) for\nthe `fill`, `stroke`, `stop-color`, `flood-color`, and `lighting-color` attributes.\n\nSee [MDN Web Docs - `color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color)",
            "type": "string",
        },
        {
            "name": "display",
            "description": "Lets you control the rendering of graphical or container elements.\n\n - [MDN Web Docs - `display` (SVG)](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display)\n\n- [MDN Web Docs - `display` (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS/display)\n",
            "type": "csstype.Property.Display",
        },
        {
            "name": "offset",
            "description": "Defines where the gradient stop is placed along the gradient vector.",
            "type": "string | number",
        },
        {
            "name": "stopColor",
            "description": "Defines the color of the gradient stop.\nIt can be used as a CSS property.\n\nSee [MDN Web Docs - `stop-color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color)",
            "type": "string",
        },
        {
            "name": "stopOpacity",
            "description": "Defines the opacity of the gradient stop.\nIt can be used as a CSS property.\n\nSee [MDN Web Docs - `stop-opacity`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity)",
            "type": "number",
        },
        {
            "name": "visibility",
            "description": "Lets you control the visibility of graphical elements.\n\nSee [MDN Web Docs - `visibility`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility)",
            "type": "csstype.Property.Visibility",
        },
    ],
    Svg: [
        {
            name: "size",
            type: "string",
            description: "Shorthand for setting both `width` and `height`.",
        },
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
            name: "viewBox",
            type: "string",
            description: "The SVG viewport coordinates for the current SVG fragment.\n\nSee [MDN Web Docs - viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).",
        },
        {
            name: "preserveAspectRatio",
            type: '"none" | `${"xMidYMin"|"xMinYMin"|"xMaxYMin"|"xMinYMid"|"xMidYMid"|"xMaxYMid"|"xMinYMax"|"xMidYMax"|"xMaxYMax"} ${"meet"|"slice"}`',
            description: "How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.\n\nSee [MDN Web Docs - preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio).",
            default: '"xMidYMid meet"',
        },
    ],
    Animate: [],
    AnimateMotion: [],
    AnimateTransform: [],
    Defs: [],
    G: [],
    Path: [],
    Polygon: [],
    Rect: [],
    Use: [],
}
