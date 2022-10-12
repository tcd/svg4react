import type { RadialGradientProps } from "./RadialGradient.types"
import { processAllProps } from "../utils"

const processRadialGradientProps = (rawProps: RadialGradientProps): RadialGradientProps => {
    const {
        ...processedProps
    } = rawProps

    return processAllProps(processedProps)
}

export default processRadialGradientProps
