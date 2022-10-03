import * as components from "./prop-components"

export const PropData: Record<Svg4ReactComponent, PropData[]> = {
    Circle: [
        {
            name: "coordinates",
            type: components.circleCoordinates,
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
    Line: [
        {
            name: "coordinates",
            type: components.lineCoordinates,
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
            type: components.polylineCoordinates,
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
    Svg: [
        {
            name: "size",
            type: "string",
            description: "Shorthand for setting both `width` and `height`.",
        },
        {
            name: "vb",
            type: components.vb,
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
            // type: '"none" | `${"xMidYMin"|"xMinYMin"|"xMaxYMin"|"xMinYMid"|"xMidYMid"|"xMaxYMid"|"xMinYMax"|"xMidYMax"|"xMaxYMax"} ${"meet"|"slice"}`',
            type: components.preserveAspectRatio,
            description: "How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.\n\nSee [MDN Web Docs - preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio).",
            default: '"xMidYMid meet"',
        },
    ],
    Animate: [],
    AnimateMotion: [],
    AnimateTransform: [],
    Defs: [],
    Ellipse: [],
    G: [],
    Path: [],
    Rect: [],
    Stop: [],
}
