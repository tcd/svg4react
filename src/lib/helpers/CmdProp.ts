import type { DrawToCommandName } from "@types"
import { DrawToFuncs } from "./DrawToFuncs"

/** @public */
export type M_args = Parameters<typeof DrawToFuncs.M>
/** @public */
export type m_args = Parameters<typeof DrawToFuncs.m>
/** @public */
export type L_args = Parameters<typeof DrawToFuncs.L>
/** @public */
export type l_args = Parameters<typeof DrawToFuncs.l>
/** @public */
export type H_args = Parameters<typeof DrawToFuncs.H>
/** @public */
export type h_args = Parameters<typeof DrawToFuncs.h>
/** @public */
export type V_args = Parameters<typeof DrawToFuncs.V>
/** @public */
export type v_args = Parameters<typeof DrawToFuncs.v>
/** @public */
export type C_args = Parameters<typeof DrawToFuncs.C>
/** @public */
export type c_args = Parameters<typeof DrawToFuncs.c>
/** @public */
export type S_args = Parameters<typeof DrawToFuncs.S>
/** @public */
export type s_args = Parameters<typeof DrawToFuncs.s>
/** @public */
export type Q_args = Parameters<typeof DrawToFuncs.Q>
/** @public */
export type q_args = Parameters<typeof DrawToFuncs.q>
/** @public */
export type T_args = Parameters<typeof DrawToFuncs.T>
/** @public */
export type t_args = Parameters<typeof DrawToFuncs.t>
/** @public */
export type A_args = Parameters<typeof DrawToFuncs.A>
/** @public */
export type a_args = Parameters<typeof DrawToFuncs.a>
/** @public */
export type Z_args = Parameters<typeof DrawToFuncs.Z>

/**
 * @public
 */
export type TCmdProp<TCmd extends DrawToCommandName, TArgs> = [
    cmd: TCmd,
    args: TArgs,
]

/**
 * @public
 */
export type CmdProp =
    | TCmdProp<"M", M_args>
    | TCmdProp<"m", m_args>
    | TCmdProp<"L", L_args>
    | TCmdProp<"l", l_args>
    | TCmdProp<"H", H_args>
    | TCmdProp<"h", h_args>
    | TCmdProp<"V", V_args>
    | TCmdProp<"v", v_args>
    | TCmdProp<"C", C_args>
    | TCmdProp<"c", c_args>
    | TCmdProp<"S", S_args>
    | TCmdProp<"s", s_args>
    | TCmdProp<"Q", Q_args>
    | TCmdProp<"q", q_args>
    | TCmdProp<"T", T_args>
    | TCmdProp<"t", t_args>
    | TCmdProp<"A", A_args>
    | TCmdProp<"a", a_args>
    | TCmdProp<"Z", Z_args>

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
