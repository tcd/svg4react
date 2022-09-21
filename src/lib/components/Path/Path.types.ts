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
export type PathProps = {
    commands: CmdProp[]
    id?: string
    // FIXME: add proper presentation attributes
    fill?: any
    stroke?: any
}
