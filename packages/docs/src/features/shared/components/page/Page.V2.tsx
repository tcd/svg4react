import type { ReactNode } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { Actions } from "@app/state"

export type PageV2Props = {
    title: string
    children: ReactNode
}

export const PageV2 = (props: PageV2Props): JSX.Element => {

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
