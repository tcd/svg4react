import {
    Example1,
    Example2,
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
            </div>
        </div>
    )
}
