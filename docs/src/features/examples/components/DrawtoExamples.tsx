import {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7,
    Example8,
    Example101,
} from "./drawto"

export const DrawtoExamples = (_props: unknown): JSX.Element => {
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
                    <Example101 />
                </div>
            </div>
        </div>
    )
}
