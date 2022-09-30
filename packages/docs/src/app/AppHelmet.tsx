import { useSelector } from "react-redux"
import { Helmet } from "react-helmet"

import { Selectors } from "@app/state"

export const AppHelmet = (_props: unknown): JSX.Element => {

    const pageTitle = useSelector(Selectors.Core.pageTitle)

    return (
        <Helmet>
            <base />
            <title>
                {pageTitle}
            </title>
        </Helmet>
    )
}
