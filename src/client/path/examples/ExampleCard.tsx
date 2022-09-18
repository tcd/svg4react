export interface ExampleCardProps {
    title: string
    children: React.ReactNode
}

export const ExampleCard = ({ title, children }: ExampleCardProps): JSX.Element => {
    return (
        <div className="row">
            <div className="col py-4">
                <div className="card text-bg-dark">
                    {/* <div className="card-img-top text-center">
                        {children && children}
                    </div> */}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div className="card-text text-center">
                            {children && children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
