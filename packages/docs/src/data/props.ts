export const PropData: Record<Svg4ReactComponent, PropData[]> = {
    Animate: [
        {
            "name": "additive",
            "description": "Controls whether or not an animation is additive.",
            "type": "\"replace\" | \"sum\"",
        },
        {
            "name": "attributeName",
            "description": "The name of the CSS property or attribute of the target element that is going to be changed during an animation.",
            "type": "string",
        },
        {
            "name": "begin",
            "description": "When an animation should begin or when an element should be discarded.",
            "type": "any",
        },
        {
            "name": "by",
            "description": "A relative offset value for an attribute that will be modified during an animation.",
            "type": "any",
        },
        {
            "name": "calcMode",
            "description": "Specifies the [interpolation](https://developer.mozilla.org/en-US/docs/Glossary/Interpolation) mode for the animation.",
            "type": "\"discrete\" | \"linear\" | \"paced\" | \"spline\"",
        },
        {
            "name": "cumulative",
            "description": "Controls whether or not an animation is cumulative.",
            "type": "\"none\" | \"sum\"",
        },
        {
            "name": "dur",
            "description": "The simple duration of an animation.",
            "type": "any",
        },
        {
            "name": "end",
            "description": "An end value for the animation that can constrain the active duration.",
            "type": "any",
        },
        {
            "name": "fill",
            "description": "Defines the final state of the animation.\n\nOptions:\n\n|            |                                             |\n|------------|---------------------------------------------|\n| `\"freeze\"` | Keep the state of the last animation frame  |\n| `\"remove\"` | Keep the state of the first animation frame |",
            "type": "\"freeze\" | \"remove\"",
        },
        {
            "name": "from",
            "description": "The initial value of the attribute that will be modified during the animation.",
            "type": "any",
        },
        {
            "name": "keySplines",
            "description": "A set of Bézier curve control points associated with the `keyTimes` list, defining a cubic Bézier function that controls interval pacing.\n\nThis attribute is ignored unless the `calcMode` attribute is set to `\"spline\"`.",
            "type": "any[]",
        },
        {
            "name": "keyTimes",
            "description": "A list of time values used to control the pacing of the animation.",
            "type": "any[]",
        },
        {
            "name": "max",
            "description": "The maximum value of the active animation duration.",
            "type": "any",
        },
        {
            "name": "min",
            "description": "The minimum value of the active animation duration.",
            "type": "any",
        },
        {
            "name": "repeatCount",
            "description": "The number of times an animation will take place.",
            "type": "number | \"indefinite\"",
        },
        {
            "name": "repeatDur",
            "description": "The total duration for repeating an animation.",
            "type": "any",
        },
        {
            "name": "restart",
            "description": "Specifies whether or not an animation can restart.",
            "type": "\"always\" | \"whenNotActive\" | \"never\"",
        },
        {
            "name": "to",
            "description": "The final value of the attribute that will be modified during the animation.",
            "type": "any",
        },
        {
            "name": "values",
            "description": "A list of values defining the sequence of values over the course of the animation.\n\nIf this attribute is specified, any `from`, `to`, and `by` attribute values set on the element are ignored.",
            "type": "any[]",
        },
    ],
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
    ClipPath: [
        {
            "name": "id",
            "description": "required",
            "type": "string",
            "required": true,
        },
        {
            "name": "clipPathUnits",
            "description": "Defines the coordinate system for the contents of the `<ClipPath>` element.",
            "type": '"userSpaceOnUse" | "objectBoundingBox"',
            "default": '"userSpaceOnUse"',
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
            type: `[\n    x1: number | string,\n    y1: number | string,\n    x2: number | string,\n    y2: number | string,\n]`,
            description: "Values, in order, as a string or number, for:\n\n- `x1` - x-axis start\n\n- `y1` - y-axis start\n\n- `x2` - x-axis end\n\n- `y2` - y-axis end",
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
    Polygon: [
        {
            "name": "points",
            "description": "The list of points (pairs of x,y absolute coordinates) required to draw the polygon.",
            type: "[x: number, y: number][]",
        },
        {
            "name": "pathLength",
            "description": "Defines the total path length in user units.",
            "type": "number",
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
        },
    ],
    Rect: [
        {
            "name": "points",
            "description": "Shorthand for the x and y axis coordinates of the center of the rect.",
            "type": "[x: number, y?: number]",
        },
        {
            "name": "radius",
            "description": "Shorthand for the horizontal and vertical corner radii of the rect.",
            "type": "[rx: number, ry?: number]",
        },
        {
            "name": "size",
            "description": "Shorthand for the width and height of the rect.",
            "type": "[width: number, height?: number]",
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
            description: `Shorthand for the setting the last two values of \`viewBox\`\n\nIf only one value is passed, it will be assigned to both \`width\` and \`height\`.\n\n\`minX\` and \`minY\` are set to 0, resulting in \`"0 0 width height"\`.\n\nWill **not** override \`viewBox\` if both are passed.`,
        },
        {
            name: "viewBox",
            type: "string",
            description: "The SVG viewport coordinates for the current SVG fragment.\n\nSee [MDN Web Docs - viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).",
        },
        {
            name: "preserveAspectRatio",
            type: '"none" | `x${"Min"|"Mid"|"Max"}Y${"Min"|"Mid"|"Max"} ${"meet"|"slice"}`',
            description: "How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.\n\nSee [MDN Web Docs - preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio).",
            default: '"xMidYMid meet"',
        },
    ],
    Text: [
        {
            "name": "coordinates",
            "description": "Shorthand for the x and y coordinates of the starting point of the text baseline.\n\nIf only one value is provided, it will be used for `x` and `y`.\n\n**Will** override `x` and `y`.",
            "type": "[x: number, y?: number]",
        },
        {
            "name": "shift",
            "description": "Shorthand for `dx` and `dy`.\n\nIf only one value is provided, it will be used for `dx` and `dy`.\n\n**Will** override `dx` and `dy`.",
            "type": "[dx: number, dy: number]",
        },
        {
            "name": "rotate",
            "description": "Rotates orientation of each individual glyph. Can rotate glyphs individually.",
            "type": "string",
        },
        {
            "name": "lengthAdjust",
            "description": "How the text is stretched or compressed to fit the width defined by the textLength attribute.",
            "type": "\"spacing\" | \"spacingAndGlyphs\"",
        },
        {
            "name": "textLength",
            "description": "A width that the text should be scaled to fit.",
            "type": "number | string",
        },
        {
            "name": "dx",
            "description": "Shifts the text position horizontally from a previous text element.",
            "type": "number | string",
        },
        {
            "name": "dy",
            "description": "Shifts the text position vertically from a previous text element.",
            "type": "number | string",
        },
        {
            "name": "x",
            "description": "The x coordinate of the starting point of the text baseline.",
            "type": "number | string",
        },
        {
            "name": "y",
            "description": "The y coordinate of the starting point of the text baseline.",
            "type": "number | string",
        },
    ],
    AnimateMotion: [],
    AnimateTransform: [],
    Defs: [],
    ForeignObject: [],
    G: [],
    Marker: [],
    Mask: [],
    MPath: [],
    Path: [],
    RadialGradient: [],
    Symbol: [],
    TextPath: [],
    TSpan: [],
    Use: [],
}
