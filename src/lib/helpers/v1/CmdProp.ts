import type { DrawToCommandName } from "@types"
import * as DrawToFuncs from "./DrawToFuncs"

export type M_args = Parameters<typeof DrawToFuncs.M>
export type m_args = Parameters<typeof DrawToFuncs.m>
export type L_args = Parameters<typeof DrawToFuncs.L>
export type l_args = Parameters<typeof DrawToFuncs.l>
export type H_args = Parameters<typeof DrawToFuncs.H>
export type h_args = Parameters<typeof DrawToFuncs.h>
export type V_args = Parameters<typeof DrawToFuncs.V>
export type v_args = Parameters<typeof DrawToFuncs.v>
export type C_args = Parameters<typeof DrawToFuncs.C>
export type c_args = Parameters<typeof DrawToFuncs.c>
export type S_args = Parameters<typeof DrawToFuncs.S>
export type s_args = Parameters<typeof DrawToFuncs.s>
export type Q_args = Parameters<typeof DrawToFuncs.Q>
export type q_args = Parameters<typeof DrawToFuncs.q>
export type T_args = Parameters<typeof DrawToFuncs.T>
export type t_args = Parameters<typeof DrawToFuncs.t>
export type A_args = Parameters<typeof DrawToFuncs.A>
export type a_args = Parameters<typeof DrawToFuncs.a>
export type Z_args = Parameters<typeof DrawToFuncs.Z>

export type TCmdProp<TCmd extends DrawToCommandName, TArgs> = {
    cmd: TCmd
    args: TArgs
}

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

export const buildDrawing = (commands: CmdProp[]): string => {
    return commands.map((cmd) => {
        switch (cmd.cmd) {
            case "M": return DrawToFuncs.M(...cmd.args)
            case "m": return DrawToFuncs.m(...cmd.args)
            case "L": return DrawToFuncs.L(...cmd.args)
            case "l": return DrawToFuncs.l(...cmd.args)
            case "H": return DrawToFuncs.H(...cmd.args)
            case "h": return DrawToFuncs.h(...cmd.args)
            case "V": return DrawToFuncs.V(...cmd.args)
            case "v": return DrawToFuncs.v(...cmd.args)
            case "C": return DrawToFuncs.C(...cmd.args)
            case "c": return DrawToFuncs.c(...cmd.args)
            case "S": return DrawToFuncs.S(...cmd.args)
            case "s": return DrawToFuncs.s(...cmd.args)
            case "Q": return DrawToFuncs.Q(...cmd.args)
            case "q": return DrawToFuncs.q(...cmd.args)
            case "T": return DrawToFuncs.T(...cmd.args)
            case "t": return DrawToFuncs.t(...cmd.args)
            case "A": return DrawToFuncs.A(...cmd.args)
            case "a": return DrawToFuncs.a(...cmd.args)
            case "Z": return DrawToFuncs.Z(...cmd.args)
            default: return ""
        }
    }).join(" ")
}
