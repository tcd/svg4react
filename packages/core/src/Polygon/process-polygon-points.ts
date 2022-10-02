import { PolygonCoordinate } from "./Polygon.types"

export const processPolygonPoints = (points: PolygonCoordinate[] = []): string => {
    return points.map(([x, y]) => `${x},${y}`).join(" ")
}
