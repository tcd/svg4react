import type { DrawCommand } from "./DrawCommand"
import * as DrawFuncs from "./DrawFuncs"

/**
 * @see [MDN Web Docs - Path Commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands)
 * @see [SVG 1.1](https://www.w3.org/TR/SVG11/paths.html#PathData)
 * @see [SVG 2.0](https://www.w3.org/TR/SVG2/paths.html#TheDProperty)
 */
const buildDrawing = (commands: DrawCommand[]): string => {
    if (!commands) {
        return ""
    }
    return commands.map((cmd) => {
        // if (!Array.isArray(cmd) || cmd.length !== 2) {
        //     return ""
        // }
        // const [code, args] = cmd
        switch (cmd[0]) {
            case "M": return DrawFuncs.M(...cmd[1])
            case "m": return DrawFuncs.m(...cmd[1])
            case "L": return DrawFuncs.L(...cmd[1])
            case "l": return DrawFuncs.l(...cmd[1])
            case "H": return DrawFuncs.H(...cmd[1])
            case "h": return DrawFuncs.h(...cmd[1])
            case "V": return DrawFuncs.V(...cmd[1])
            case "v": return DrawFuncs.v(...cmd[1])
            case "C": return DrawFuncs.C(...cmd[1])
            case "c": return DrawFuncs.c(...cmd[1])
            case "S": return DrawFuncs.S(...cmd[1])
            case "s": return DrawFuncs.s(...cmd[1])
            case "Q": return DrawFuncs.Q(...cmd[1])
            case "q": return DrawFuncs.q(...cmd[1])
            case "T": return DrawFuncs.T(...cmd[1])
            case "t": return DrawFuncs.t(...cmd[1])
            case "A": return DrawFuncs.A(...cmd[1])
            case "a": return DrawFuncs.a(...cmd[1])
            case "Z": return DrawFuncs.Z()
            case "z": return DrawFuncs.z()
            default: return ""
        }
    }).join(" ")
}

export default buildDrawing
