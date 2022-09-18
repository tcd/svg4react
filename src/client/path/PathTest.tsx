import {
    Example1,
    Example2,
    Example3,
    Example4,
} from "./examples"

export const PathTest = (_props: unknown): JSX.Element => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <Example1 />
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <Example2 />
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <Example3 />
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <Example4 />
                </div>
            </div>
        </div>
    )
}
