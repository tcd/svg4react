import type { LineProps } from "./Line.types"
import { processAllProps } from "../utils"

const processLineProps = (rawProps: LineProps): LineProps => {

    const {
        coordinates: [
            x1 = 0,
            y1 = 0,
            x2 = 0,
            y2 = 0,
        ],
        ...processedProps
    } = rawProps

    // @ts-ignore: next-line
    processedProps.x1 = x1
    // @ts-ignore: next-line
    processedProps.y1 = y1
    // @ts-ignore: next-line
    processedProps.x2 = x2
    // @ts-ignore: next-line
    processedProps.y2 = y2

    return processAllProps(processedProps as LineProps)
}

export default processLineProps
