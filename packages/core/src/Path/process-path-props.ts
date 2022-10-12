import { buildDrawing, processAllProps } from "../utils"
import type { PathProps } from "./Path.types"

const processPathProps = (rawProps: PathProps): PathProps => {
    const {
        commands = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(commands) && commands.length > 0) {
        processedProps.d = buildDrawing(commands)
    }

    return processAllProps(processedProps)
}

export default processPathProps
