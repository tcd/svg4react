import { SVGProps } from "react"

export interface SvgProps extends SVGProps<SVGSVGElement> {
    /**
     * Assigned to both `width` and `height`
     */
    size?: string
}
