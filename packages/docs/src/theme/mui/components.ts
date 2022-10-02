import {
    Components,
    LinkProps,
} from "@mui/material"
import { experimental_sx as sx } from "@mui/material/styles"

import { baseStyleOverrides } from "./base-style-overrides"
import { LinkBehavior } from "./LinkBehavior"

export const componentOverrides: Components = {
    MuiCssBaseline: {
        styleOverrides: baseStyleOverrides,
    },
    // -------------------------------------------------------------------------
    // Lists
    // -------------------------------------------------------------------------
    MuiList: {
        styleOverrides: {
            root: {
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
    },
    // -------------------------------------------------------------------------
    // Horizontal Rule
    // -------------------------------------------------------------------------
    MuiDivider: {
        // styleOverrides: {
        //     root: {
        //     },
        // },
        variants: [
            {
                props: { variant: "thick" },
                style: {
                    borderBottomWidth: "1.25px",
                    borderColor: "rgba(0, 0, 0, 0.5)",
                    // margin: "12px 0px",
                },
            },
        ],
    },
    // -------------------------------------------------------------------------
    // Links
    // -------------------------------------------------------------------------
    MuiLink: {
        defaultProps: {
            component: LinkBehavior,
        } as LinkProps,
        styleOverrides: {
            root: sx({
                textDecoration: "none",
                "&:hover, &:focus, &:active, &.Mui-focusVisible": {
                    textDecoration: "underline",
                    // outline: "none",
                },
            }),
        },
    },
    // -------------------------------------------------------------------------
    // Buttons
    // -------------------------------------------------------------------------
    MuiButtonBase: {
        defaultProps: {
            LinkComponent: LinkBehavior,
        },
    },
    // -------------------------------------------------------------------------
    // Typography
    // -------------------------------------------------------------------------
    MuiTypography: {
        defaultProps: {
            variantMapping: {
                h1: "h1",
                h2: "h2",
                h3: "h3",
                h4: "h4",
                h5: "h5",
                h6: "h6",
                subtitle1: "span",
                subtitle2: "span",
                body1: "span",
                body2: "span",
                inherit: "span",
                caption: "span",
                overline: "span",
                // custom
                code: "pre",
            },
        },
    },
}
