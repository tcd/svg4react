import { Box, Stack, Typography } from "@mui/material"

import { Page } from "@app/features/shared"
import { Shield, ShieldProps } from "./Shield"

export const HomePage = (_props: unknown): JSX.Element => {

    const $shields = shields.map((props, i) => <Shield key={i} {...props} />)

    return (
        <Page title="Home">
            <Box sx={{ mb: 5 }}>
                <Typography variant="h3" gutterBottom>
                    svg4react
                </Typography>
                <Stack direction="row" spacing={1}>
                    {$shields}
                </Stack>
            </Box>
            <Typography variant="body1">
                React components &amp; TypeScript types for creating SVG elements.
            </Typography>
        </Page>
    )
}

// =============================================================================

const shields: ShieldProps[] = [
    { title: "latest",   imgSrc: "https://img.shields.io/npm/v/svg4react",              href: "https://www.npmjs.com/package/svg4react" },
    { title: "unstable", imgSrc: "https://img.shields.io/npm/v/svg4react/next",         href: "https://www.npmjs.com/package/svg4react/v/next" },
    { title: "Issues",   imgSrc: "https://img.shields.io/github/issues/tcd/svg4react",  href: "https://github.com/tcd/svg4react/issues" },
    { title: "License",  imgSrc: "https://img.shields.io/github/license/tcd/svg4react", href: "https://github.com/tcd/svg4react/blob/LICENSE.md" },
]
