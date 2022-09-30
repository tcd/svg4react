export const cleanCode = (code: string): string => {
    return `${code}` // don't modify the original value
        .replaceAll(/^import \{[^{]+\} from .+$\n/gm, "") // import { x, y } from "z"
        .replaceAll(/^import \* as \S+ from .+$\n/gm, "") // import * as abc from "z"
        .replaceAll(/: \S+ = /g, " = ")                   // let a: string = "something"
}
