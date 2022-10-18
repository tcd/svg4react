import type { ReactNode } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import { DocsSx } from "@app/theme"
import { Actions } from "@app/state"
import { MuiToc } from "./MuiToc"

export type PageV2Props = {
    title: string
    children: ReactNode
    toc: TocItem[]
}

export const PageV2 = (props: PageV2Props): JSX.Element => {

    const dispatch = useDispatch()

    const {
        title = null,
        children = null,
        toc = [],
    } = props

    useEffect(() => {
        dispatch(Actions.Core.setPageTitle(title))
        return () => {
            dispatch(Actions.Core.clearPageTitle())
        }
    }, [dispatch, title])

    return (
        <Box sx={DocsSx.Layout.Page.root}>
            <Box sx={{ flexGrow: 1 }}>
                <>
                    {children && children}
                </>
            </Box>
            <MuiToc toc={toc}/>
        </Box>
    )
}
