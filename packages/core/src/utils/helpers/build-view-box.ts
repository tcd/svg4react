import type { VB } from "../types"

/**
 * Convert `vb` into a valid *viewBox* value.
 */
export default function buildViewBox(vb: VB): string {
    if (!vb) { return undefined }
    if (!Array.isArray(vb)) { return undefined }

    if (vb.length === 1 || vb.length === 2) {
        const [width, height = width] = vb
        return `0 0 ${width} ${height}`
    }

    if (vb.length === 4) {
        const [minX, minY, width, height] = vb
        return `${minX} ${minY} ${width} ${height}`
    }

    return undefined
}
