import { PolylineCoordinate, PolylineProps } from "./Polyline.types"

const processPolylinePoints = (points: PolylineCoordinate[] = []): string => {
    return points.map(([x, y]) => `${x},${y}`).join(" ")
}

const processPolylineProps = (rawProps: PolylineProps): PolylineProps => {
    const {
        points = [],
        ...processedProps
    } = rawProps

    // @ts-ignore: next-line
    processedProps.points = processPolylinePoints(points)

    return processedProps as PolylineProps
}

export default processPolylineProps
