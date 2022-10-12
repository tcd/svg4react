import type { SVGTransform } from "../types"

const processTransformList = (list: SVGTransform[]): string | undefined => {
    if (!!!list) {
        return undefined
    }
    return list.map((t) => `${t[0]}(${t[1].join(" ")})`).join(" ")
    //  const results = []
    //
    //  for (const item of list) {
    //      const [type, args] = item
    //      results.push(`${type}(${args.join(" ")})`)
    //
    //  }
}

export default processTransformList
