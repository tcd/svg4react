import type { ISxProps as SxProps } from "@app/theme"
import { DarkPlusColors, LightPlusColors } from "@app/util"

// =============================================================================
// Cards
// =============================================================================

const cardsRoot: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}

const divider: SxProps = {
    my: "40px",
}

// =============================================================================
// Card
// =============================================================================

const root: SxProps = {
    // backgroundColor: "cyan",
    display: "flex",
    flexFlow: "column nowrap",
    overflow: "scroll",
    pr: 1,
}

const title: SxProps = {
    display: "block",
    fontSize: "20px",
    // pb: "25px",
    color: (theme) => theme.palette.mode === "dark" ? DarkPlusColors.variable : LightPlusColors.variable,
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
        title,
        header,
        content,
    },
}

