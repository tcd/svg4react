import { PolygonProps, PolygonCoordinate } from "./Polygon.types"

const processPolygonPoints = (points: PolygonCoordinate[] = []): string => {
    return points.map(([x, y]) => `${x},${y}`).join(" ")
}

const processPolygonProps = (rawProps: PolygonProps): PolygonProps => {
    const {
        points = [],
        ...processedProps
    } = rawProps

    // @ts-ignore: next-line
    processedProps.points = processPolygonPoints(points)

    return processedProps as PolygonProps
}

export default processPolygonProps
