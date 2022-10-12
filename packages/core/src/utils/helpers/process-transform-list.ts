import type { SVGTransform } from "../types"

const processTransformList = (list: SVGTransform[]): string | undefined => {
    if (!(Array.isArray(list) && list.length > 0)) {
        return undefined
    }
    return list.map((t) => `${t[0]}(${t[1].join(" ")})`).join(" ")
}

export default processTransformList
