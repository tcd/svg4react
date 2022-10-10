import type {
    ISxProps as SxProps,
    ITheme as Theme,
} from "@app/theme/helpers"
import { ThemeVars } from "@app/theme/variables"

const root: SxProps = {
    display: "flex",
}

const main: SxProps = (theme: Theme) => {
    const padding = theme.spacing(3)
    return {
        flexGrow: 1,
        p: 3,
        [theme.breakpoints.down("laptop")]: {
            width: `calc(100vw - ${padding} - ${padding})`,
        },
        [theme.breakpoints.up("laptop")]: {
            width: `calc(100vw - ${ThemeVars.drawerWidth} - ${padding} - ${padding})`,
        },
    }
}

export const Layout = {
    root,
    main,
}
