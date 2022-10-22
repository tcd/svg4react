import type { ReactNode } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Box, Stack } from "@mui/material"

import { DocsSx } from "@app/theme"
import { Actions } from "@app/state"
import { MuiToc } from "./MuiToc"
import { ComponentOverview } from "../ComponentOverview"

export type ComponentPageProps = {
    componentName: Svg4ReactComponent
    demo: ReactNode
    toc: TocItem[]
}

export const ComponentPage = (props: ComponentPageProps): JSX.Element => {

    const dispatch = useDispatch()

    const {
        demo = null,
        toc = [],
        componentName,
    } = props

    const pageTitle = `<${componentName}>`

    useEffect(() => {
        dispatch(Actions.Core.setPageTitle(pageTitle))
        return () => {
            dispatch(Actions.Core.clearPageTitle())
        }
    }, [dispatch, pageTitle])

    return (
        <Box sx={DocsSx.Layout.Page.root}>
            <Stack spacing={4} sx={DocsSx.Layout.Page.content}>
                <ComponentOverview componentName={componentName} />
                {demo && demo}
            </Stack>
            <MuiToc toc={toc}/>
        </Box>
    )
}
