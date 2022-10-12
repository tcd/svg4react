import type { EllipseProps } from "./Ellipse.types"
import { processAllProps } from "../utils"

const processEllipseProps = (rawProps: EllipseProps): EllipseProps => {
    const {
        coordinates = [],
        radius = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coordinates) && coordinates.length > 0) {
        const [cx, cy = cx] = coordinates
        processedProps.cx = cx
        processedProps.cy = cy
    }

    if (Array.isArray(radius) && radius.length > 0) {
        const [rx, ry = rx] = coordinates
        processedProps.rx = rx
        processedProps.ry = ry
    }

    return processAllProps(processedProps)
}

export default processEllipseProps
