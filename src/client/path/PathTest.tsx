import {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7,
    Example8,
    V1_5Examples,
} from "./examples"

export const PathTest = (_props: unknown): JSX.Element => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Example1 />
                    <Example2 />
                    <Example3 />
                    <Example4 />
                    <Example5 />
                    <Example6 />
                    <Example7 />
                    <Example8 />
                </div>
                <div className="col">
                    <V1_5Examples.Example1 />
                    <V1_5Examples.Example2 />
                    <V1_5Examples.Example3 />
                    <V1_5Examples.Example4 />
                    <V1_5Examples.Example5 />
                    <V1_5Examples.Example6 />
                    <V1_5Examples.Example7 />
                    <V1_5Examples.Example8 />
                </div>
            </div>
        </div>
    )
}
