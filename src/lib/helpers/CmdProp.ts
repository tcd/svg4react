import { DrawToFuncs } from "./DrawToFuncs"
import type { DrawToArgs, DrawToCommandName } from "svg4react"

/**
 * @public
 */
export type TCmdProp<TCmd extends DrawToCommandName, TArgs> = [
    cmd: TCmd,
    args: TArgs[],
]

/**
 * @public
 */
export type CmdProp =
    | TCmdProp<"M", DrawToArgs.M>
    | TCmdProp<"m", DrawToArgs.m>
    | TCmdProp<"L", DrawToArgs.L>
    | TCmdProp<"l", DrawToArgs.l>
    | TCmdProp<"H", DrawToArgs.H>
    | TCmdProp<"h", DrawToArgs.h>
    | TCmdProp<"V", DrawToArgs.V>
    | TCmdProp<"v", DrawToArgs.v>
    | TCmdProp<"C", DrawToArgs.C>
    | TCmdProp<"c", DrawToArgs.c>
    | TCmdProp<"S", DrawToArgs.S>
    | TCmdProp<"s", DrawToArgs.s>
    | TCmdProp<"Q", DrawToArgs.Q>
    | TCmdProp<"q", DrawToArgs.q>
    | TCmdProp<"T", DrawToArgs.T>
    | TCmdProp<"t", DrawToArgs.t>
    | TCmdProp<"A", DrawToArgs.A>
    | TCmdProp<"a", DrawToArgs.a>
    | TCmdProp<"Z", DrawToArgs.Z>

/**
 * @public
 */
export const buildDrawing = (commands: CmdProp[]): string => {
    return commands.map((cmd) => {
        switch (cmd[0]) {
            case "M": return DrawToFuncs.M(...cmd[1])
            case "m": return DrawToFuncs.m(...cmd[1])
            case "L": return DrawToFuncs.L(...cmd[1])
            case "l": return DrawToFuncs.l(...cmd[1])
            case "H": return DrawToFuncs.H(...cmd[1])
            case "h": return DrawToFuncs.h(...cmd[1])
            case "V": return DrawToFuncs.V(...cmd[1])
            case "v": return DrawToFuncs.v(...cmd[1])
            case "C": return DrawToFuncs.C(...cmd[1])
            case "c": return DrawToFuncs.c(...cmd[1])
            case "S": return DrawToFuncs.S(...cmd[1])
            case "s": return DrawToFuncs.s(...cmd[1])
            case "Q": return DrawToFuncs.Q(...cmd[1])
            case "q": return DrawToFuncs.q(...cmd[1])
            case "T": return DrawToFuncs.T(...cmd[1])
            case "t": return DrawToFuncs.t(...cmd[1])
            case "A": return DrawToFuncs.A(...cmd[1])
            case "a": return DrawToFuncs.a(...cmd[1])
            case "Z": return DrawToFuncs.Z()
            default: return ""
        }
    }).join(" ")
}
