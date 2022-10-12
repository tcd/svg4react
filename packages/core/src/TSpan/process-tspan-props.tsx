import { processAllProps } from "../utils"
import type { TSpanProps } from "./TSpan.types"

const processTSpanProps = (rawProps: TSpanProps): TSpanProps => {
    const {
        value = undefined,
        coordinates = [],
        shift = [],
        ...processedProps
    } = rawProps

    if (typeof(value) === "string") {
        processedProps.children = <>{value}</>
    }

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

export default processTSpanProps
