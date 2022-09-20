import type { ReactNode } from "react"

export interface ExampleCardProps {
    title: string
    url: string
    children: ReactNode
}

export const ExampleCard = ({ title, url, children }: ExampleCardProps): JSX.Element => {
    return (
        <div className="row">
            <div className="col py-4">
                <div className="card text-bg-dark">

                    {/* <div className="card-img-top text-center">
                        {children && children}
                    </div> */}

                    <div className="card-body">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <h5 className="card-title">{title}</h5>
                        </a>
                        <div className="card-text text-center">
                            {children && children}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
