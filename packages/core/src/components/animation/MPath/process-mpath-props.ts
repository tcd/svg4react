import type { MPathProps } from "./MPath.types"

const processMPathProps = (rawProps: MPathProps): MPathProps => {
    const {
        ...processedProps
    } = rawProps

    return processedProps
}

export default processMPathProps
