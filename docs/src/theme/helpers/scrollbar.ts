import { ThemeBreakpoints } from "./ITheme"

/**
 * [Scrollbar Anatomy](https://cdn.orangeable.com/img/scrollbar-anatomy.png)
 */
export type ScrollbarFuncOptions = {
    track: string;
    thumb: string;
    active: string;
}

// track, thumb and active are derived from macOS 10.15.7
const defaults: ScrollbarFuncOptions = {
    track: "#141e28",
    thumb: "#6b6b6b",
    active: "#959595",
}

// // track, thumb and active are derived from macOS 10.15.7
// const defaults: ScrollbarFuncOptions = {
//     track: "#f1f1f1",
//     thumb: "#c1c1c1",
//     active: "#a8a8a8",
// }

/**
 *
 * ## See
 *
 * - [MDN - `scrollbar-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)
 * - [MDN - `scrollbar-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)
 * - [MDN - `::-webkit-scrollbar`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)
 * - [From 2009](https://webkit.org/blog/363/styling-scrollbars/)
 */
export const scrollbar = (options = defaults) => {

    const {
        track,
        thumb,
        active,
    } = options

    const borderRadius = 0
    const scrollbarSize = "10px"

    return {
        [ThemeBreakpoints.up("sm")]: {
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                height: scrollbarSize,
                width: scrollbarSize,
                background: track,
                borderRadius: borderRadius,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                borderRadius: borderRadius,
                backgroundColor: thumb,
                minHeight: 22,
            },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                background: track,
            },
            "&::-webkit-scrollbar-thumb:focus,  & *::-webkit-scrollbar-thumb:focus":  { backgroundColor: active },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": { backgroundColor: active },
            "&::-webkit-scrollbar-thumb:hover,  & *::-webkit-scrollbar-thumb:hover":  { backgroundColor: active },
        },
    }
}

const selectors = <const>{
    track: "&::-webkit-scrollbar, & *::-webkit-scrollbar",
    thumb: "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb",
    corner: "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner",
    thumbFocus: "&::-webkit-scrollbar-thumb:focus,  & *::-webkit-scrollbar-thumb:focus",
    thumbActive: "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active",
    thumbHover: "&::-webkit-scrollbar-thumb:hover,  & *::-webkit-scrollbar-thumb:hover",
}
