import type {
    ISxProps as SxProps,
    // ITheme as Theme,
} from "@app/theme"

const lineHeight = 1.3

const root: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",

    marginBlockStart:  "unset",
    marginBlockEnd:    "unset",
    marginInlineStart: "unset",
    marginInlineEnd:   "unset",
}

const item: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    "&:not(:last-child)": {
        marginBottom: "1.5em",
    },
}

const dt: SxProps = {
    lineHeight,
    // color: "#6c757d",
    fontSize: "0.95em",
    marginBottom: "0.75em",
    fontWeight: "bold",
}

const dd: SxProps = {
    lineHeight,
    // fontSize: "1em",
    display: "block",
    marginInlineStart: "10px",
}

// const elementSx: SxProps = {
//     display: "flex",
//     flexFlow: "row nowrap",
//     justifyContent: "flex-start",
//     marginLeft: "2em",
// };

export const DescriptionList = {
    root,
    item,
    dt,
    dd,
}
