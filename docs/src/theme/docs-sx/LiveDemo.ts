import { ISxProps as SxProps } from "@app/theme/helpers"

const root: SxProps = {
    // background: "indianred",
}

const container: SxProps = {
    // background: "orange",
    display: "flex",
    flexFlow: "row",
    alignItems: "stretch",
}

const editor: SxProps = {
    // background: "yellow",
    flexGrow: 1,
}

const preview: SxProps = {
    // background: "royalblue",
    flexGrow: 1,
    mx: 3,
    p: 2,
}

const error: SxProps = {
    flexGrow: 0,
}

export const LiveDemo = {
    root,
    container,
    editor,
    preview,
    error,
}
