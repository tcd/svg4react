import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { Actions } from "@app/state"

export type PageProps = {
    title: string
    children: React.ReactNode
}

export const Page = (props: PageProps): JSX.Element => {

    const dispatch = useDispatch()

    const {
        title = null,
        children = null,
    } = props

    useEffect(() => {
        dispatch(Actions.Core.setPageTitle(title))
        return () => {
            dispatch(Actions.Core.clearPageTitle())
        }
    }, [dispatch, title])

    return (
        <>
            {children && children}
        </>
    )
}
