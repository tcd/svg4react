## Overview


`DrawArgs` types are an alternative, typechecked syntax for defining SVG [*path commands*][path-data].

|   Code    |              Name               |
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


## Definitions


[path-data]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
