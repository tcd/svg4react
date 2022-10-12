import { processAllProps } from "../utils"
import type { MPathProps } from "./MPath.types"

const processMPathProps = (rawProps: MPathProps): MPathProps => {
    const {
        ...processedProps
    } = rawProps

    return processAllProps(processedProps)
}

export default processMPathProps
