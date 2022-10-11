import { FeColorMatrixProps } from "./FeColorMatrix.types"

const processProps = (rawProps: FeColorMatrixProps) => {
    const {
        values = undefined,
    } = rawProps

    if (values === undefined) {
        throw "[FeColorMatrix] invalid props"
    }

    // TODO: process props for FeColorMatrix
}

export default processProps
