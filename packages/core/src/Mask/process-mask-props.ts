import type { MaskProps } from "./Mask.types"
import { processAllProps } from "../utils"

const processMaskProps = (rawProps: MaskProps): MaskProps => {
    const {
        coordinates = [],
        size = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coordinates) && coordinates.length > 0) {
        const [x, y = x] = coordinates
        // @ts-ignore: next-line
        processedProps.x = x
        // @ts-ignore: next-line
        processedProps.y = y
    }

    if (Array.isArray(size) && size.length > 0) {
        const [width, height = width] = size
        // @ts-ignore: next-line
        processedProps.width = width
        // @ts-ignore: next-line
        processedProps.height = height
    }

    return processAllProps(processedProps)
}

export default processMaskProps
