const toUnits = (values: number[], unit: string, comma: boolean): string => {
    return values.map(x => `${x}${unit}`).join(`${comma ? "," : ""} `)
}

export const px = (...values: number[]) => toUnits(values, "px", false)
export const ms = (...values: number[]) => toUnits(values, "ms", true)
