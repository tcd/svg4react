import type { LineProps } from "./Line.types"

export const processLineProps = (rawProps: LineProps): LineProps => {

    const {
        coordinates: [
            x1 = 0,
            y1 = 0,
            x2 = 0,
            y2 = 0,
        ],
        ...processedProps
    } = rawProps

    processedProps.x1 = x1
    processedProps.y1 = y1
    processedProps.x2 = x2
    processedProps.y2 = y2

    return processedProps as LineProps
}
