declare module "svg4react" {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    export namespace DrawToArgs {
        type M = [x: number, y: number]
        type m = [dx: number, dy: number]
        type L = [x: number, y: number]
        type l = [dx: number, dy: number]
        type H = number
        type h = number
        type V = number
        type v = number
        type C = [
            x1: number, y1: number,
            x2: number, y2: number,
            x: number,  y: number,
        ]
        type c = [
            dx1: number, dy1: number,
            dx2: number, dy2: number,
            dx: number,  dy: number,
        ]
        type S = [
            x2: number, y2: number,
            x: number,  y: number,
        ]
        type s = [
            dx2: number, dy2: number,
            dx: number,  dy: number,
        ]
        type Q = [
            x1: number, y1: number,
            x: number,  y: number,
        ]
        type q = [
            dx1: number, dy1: number,
            dx: number,  dy: number,
        ]
        type T = [x: number, y: number]
        type t = [dx: number, dy: number]
        type A = [
            rx: number, ry: number,
            angle: number,
            largeArcFlag: 0 | 1,
            sweepFlag: 0 | 1,
            x: number, y: number,
        ]
        type a = [
            rx: number, ry: number,
            angle: number,
            largeArcFlag: 0 | 1,
            sweepFlag: 0 | 1,
            x: number, y: number,
        ]
        type Z = null | undefined
        type z = null | undefined
    }
}
