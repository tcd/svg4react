## About


The `DrawCommand` type is an alternative, typechecked syntax for defining SVG [*path commands*][path-data].

When passed as props, `DrawCommand`s are always arrays.

The following components have `DrawCommand` props:

- [Path](/components/Path) (`PathProps.commands`)


## Definition


```typescript
type DrawCommand =
    | [ cmd: "M", args: DrawArgs.M[] ]
    | [ cmd: "m", args: DrawArgs.m[] ]
    | [ cmd: "L", args: DrawArgs.L[] ]
    | [ cmd: "l", args: DrawArgs.l[] ]
    | [ cmd: "H", args: DrawArgs.H[] ]
    | [ cmd: "h", args: DrawArgs.h[] ]
    | [ cmd: "V", args: DrawArgs.V[] ]
    | [ cmd: "v", args: DrawArgs.v[] ]
    | [ cmd: "C", args: DrawArgs.C[] ]
    | [ cmd: "c", args: DrawArgs.c[] ]
    | [ cmd: "S", args: DrawArgs.S[] ]
    | [ cmd: "s", args: DrawArgs.s[] ]
    | [ cmd: "Q", args: DrawArgs.Q[] ]
    | [ cmd: "q", args: DrawArgs.q[] ]
    | [ cmd: "T", args: DrawArgs.T[] ]
    | [ cmd: "t", args: DrawArgs.t[] ]
    | [ cmd: "A", args: DrawArgs.A[] ]
    | [ cmd: "a", args: DrawArgs.a[] ]
    | [ cmd: "Z", args: DrawArgs.Z[] ]
    | [ cmd: "z", args: DrawArgs.z[] ]
```


## DrawArgs


|   code    |        name/description         |
| --------- | ------------------------------- |
| `M` / `m` | moveto                          |
| `L` / `l` | lineto                          |
| `H` / `h` | horizontal_lineto               |
| `V` / `v` | vertical_lineto                 |
| `C` / `c` | curveto                         |
| `S` / `s` | smooth_curveto                  |
| `Q` / `q` | quadratic_bezier_curveto        |
| `T` / `t` | smooth_quadratic_bezier_curveto |
| `A` / `a` | elliptical_arc                  |
| `Z` / `z` | closepath                       |

<!-- |          type          |   code    |        name/description         |
| ---------------------- | --------- | ------------------------------- |
| MoveTo                 | `M` / `m` | moveto                          |
| LineTo                 | `L` / `l` | lineto                          |
| LineTo                 | `H` / `h` | horizontal_lineto               |
| LineTo                 | `V` / `v` | vertical_lineto                 |
| Cubic Bézier Curve     | `C` / `c` | curveto                         |
| Cubic Bézier Curve     | `S` / `s` | smooth_curveto                  |
| Quadratic Bézier Curve | `Q` / `q` | quadratic_bezier_curveto        |
| Quadratic Bézier Curve | `T` / `t` | smooth_quadratic_bezier_curveto |
| Elliptical Arc Curve   | `A` / `a` | elliptical_arc                  |
| ClosePath              | `Z` / `z` | closepath                       | -->


## See Also


- [DrawArgs](/core/DrawArgs)

[path-data]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
