import { processAllProps } from "../utils"
import type { SymbolProps } from "./Symbol.types"

const processSymbolProps = (rawProps: SymbolProps): SymbolProps => {
    const {
        vb = [],
        size = [],
        coords = [],
        refXY = [],
        ...processedProps
    } = rawProps

    // @ts-ignore: next-line
    if (!processedProps.viewBox) {
        if (Array.isArray(vb) && vb.length > 0) {
            const [width, height = width] = vb
            // @ts-ignore: next-line
            processedProps.viewBox = `0 0 ${width} ${height}`
        }
    }

    if (Array.isArray(size) && size.length > 0) {
        const [width, height = width] = size
        processedProps.width  = width
        processedProps.height = height
    }

    if (Array.isArray(coords) && coords.length > 0) {
        const [x, y = x] = coords
        processedProps.x = x
        processedProps.y = y
    }

    if (Array.isArray(refXY) && refXY.length > 0) {
        const [refX, refY = refX] = refXY
        // @ts-ignore: next-line
        processedProps.refX = refX
        // @ts-ignore: next-line
        processedProps.refY = refY
    }

    return processAllProps(processedProps)
}

export default processSymbolProps
