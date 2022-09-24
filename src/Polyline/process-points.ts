import { PolylineCoordinate } from "./Polyline.types"

export const processPoints = (points: PolylineCoordinate[] = []): string => {
    return points.map((x, y) => `${x},${y}`).join(" ")
}
