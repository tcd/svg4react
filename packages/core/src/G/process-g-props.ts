import type { GProps } from "./G.types"
import { processAllProps } from "../utils"

const processGProps = (rawProps: GProps): GProps => {
    return processAllProps(rawProps)
}

export default processGProps
