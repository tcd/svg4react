import { processAllProps } from "../utils"
import type { TextProps } from "./Text.types"

const processTextProps = (rawProps: TextProps): TextProps => {
    const {
        coordinates = [],
        shift = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coordinates) && coordinates.length > 0) {
        const [x, y = x] = coordinates
        processedProps.x = x
        processedProps.y = y
    }

    if (Array.isArray(shift) && shift.length > 0) {
        const [dx, dy = dx] = shift
        processedProps.dx = dx
        processedProps.dy = dy
    }

    return processAllProps(processedProps)
}

export default processTextProps
