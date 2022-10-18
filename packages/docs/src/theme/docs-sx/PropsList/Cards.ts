import type { StackProps } from "@mui/material"
import type { ISxProps as SxProps } from "@app/theme"

// =============================================================================
// Cards
// =============================================================================

const cardsRoot: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}

const divider: SxProps = {
    my: "30px",
}

// =============================================================================
// Card
// =============================================================================

const root: SxProps = {
    // backgroundColor: "cyan",
    display: "flex",
    flexFlow: "column nowrap",
}

const header: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
}

const content: SxProps = {
    // pt: 2,
    display: "flex",
    flexFlow: "row nowrap",
}

// =============================================================================
// All Together
// =============================================================================

export const Cards = {
    root: cardsRoot,
    divider,
    card: {
        root,
        header,
        content,
    },
}

