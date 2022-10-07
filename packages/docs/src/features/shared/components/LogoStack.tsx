import { Stack } from "@mui/material"

export type LogoStackProps = {
    children: React.ReactNode
}

export const LogoStack = ({ children }: LogoStackProps): JSX.Element => {
    return (
        <Stack spacing={3} direction={{ mobile: "column", tablet: "row" }}>
            {children && children}
        </Stack>
    )
}
