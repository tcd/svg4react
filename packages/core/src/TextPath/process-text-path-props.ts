import { buildDrawing } from "../utils"
import type { TextPathProps } from "./TextPath.types"

const processTextPathProps = (rawProps: TextPathProps): TextPathProps => {
    const {
        commands = [],
        href = null,
        ...processedProps
    } = rawProps

    if (href !== null) {
        // @ts-ignore: next-line
        processedProps.href = href
    } else {
        if (Array.isArray(commands) && commands.length > 0) {
            processedProps.d = buildDrawing(commands)
        }
    }

    return processedProps
}

export default processTextPathProps
