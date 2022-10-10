import type { SymbolProps } from "./Symbol.types"

const processSymbolProps = (rawProps: SymbolProps): SymbolProps => {
    const {
        vb = [],
        refXY = [],
        size = [],
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

    if (Array.isArray(refXY) && refXY.length > 0) {
        const [x, y = x] = refXY
        // @ts-ignore: next-line
        processedProps.x = x
        // @ts-ignore: next-line
        processedProps.y = y
    }

    if (Array.isArray(size) && size.length > 0) {
        const [width, height = width] = size
        // @ts-ignore: next-line
        processedProps.width  = width
        // @ts-ignore: next-line
        processedProps.height = height
    }

    return processedProps
}

export default processSymbolProps
