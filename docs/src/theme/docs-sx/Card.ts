import type { PaperProps } from "@mui/material"
import type { ISxProps as SxProps } from "@app/theme"
import { ThemeVars } from "@app/theme/variables"

const root: PaperProps = {
    elevation: 3,
    sx: {
        p: 3,
    },
}

const title: SxProps = {
    // mb: 4,
}

const componentName: SxProps = {
    fontFamily: ThemeVars.fontFamily.monospace,
}

const body: SxProps = {
    // mb: 4,
}

export const Card = {
    root,
    title,
    componentName,
    body,
}
