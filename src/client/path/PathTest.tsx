import {
    Example1,
    Example2,
    Example3,
} from "./examples"

export const PathTest = (_props: unknown): JSX.Element => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Example1 />
                </div>
                <div className="col">
                    <Example2 />
                </div>
                <div className="col">
                    <Example3 />
                </div>
            </div>
        </div>
    )
}
