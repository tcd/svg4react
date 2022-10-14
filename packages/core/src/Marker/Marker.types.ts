import type { ISVGProps, CommonSVGAttributes, Length } from "../utils"

export type MarkerRef = "left" | "center" | "right" | Length

export type MarkerAttributes = {
    /**
     * Shorthand for `refX` and `refY`.
     *
     * If only one value is provided, it will be passed to both `refX` and `refY`.
     *
     * **Will** override `refX` and `refY`.
     *
     * @shorthand refX
     * @shorthand refY
     */
    refXY?: [refX: number, refY?: number]
    /**
     * Shorthand for `markerWidth` and `markerHeight`.
     *
     * If only one value is provided, it will be passed to both `markerWidth` and `markerHeight`.
     *
     * **Will** override `markerWidth` and `markerHeight`.
     *
     * @shorthand markerWidth
     * @shorthand markerHeight
     */
    size?: [markerWidth: number, markerHeight?: number]
    /**
     * The orientation of the marker relative to the shape it is attached to.
     *
     * @default 0
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/orient)
     */
    orient?: "auto" | "auto-start-reverse" | SVGAngle
    /**
     * The coordinate system for the attributes `markerWidth`, `markerHeight`, and the contents of the `<marker>`.
     *
     * @default "strokeWidth"
     */
    markerUnits?: "userSpaceOnUse" | "strokeWidth"
    /**
     * The width of the marker viewport.
     *
     * @default 3
     */
    markerWidth?: number | string
    /**
     * The height of the marker viewport.
     *
     * @default 3
     */
    markerHeight?: number | string
    /**
     * Defines how the svg fragment must be deformed if it is embedded in a container with a different aspect ratio.
     *
     * @default "xMidYMid meet"
     */
    preserveAspectRatio?: any // FIXME: _MarkerAttributes.preserveAspectRatio
    /**
     * Defines the x coordinate for the reference point of the marker.
     *
     * @default 0
     */
    refX?: "left" | "center" | "right" | number | string
    /**
     * Defines the y coordinate for the reference point of the marker.
     *
     * @default 0
     */
    refY?: "left" | "center" | "right" | number | string
}

/**
 * @see [MDN Web Docs - `<marker>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker)
 */
export type MarkerProps =
    ISVGProps<SVGMarkerElement>
    & MarkerAttributes
    & CommonSVGAttributes
