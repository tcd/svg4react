import { SVGProps } from "react"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
 */
export type ViewBox = [
    minX: number,
    minY: number,
    width: number,
    height: number,
]

export interface SvgProps extends SVGProps<SVGSVGElement> {
    /**
     * Assigned to both `width` and `height`
     */
    size?: string
}
