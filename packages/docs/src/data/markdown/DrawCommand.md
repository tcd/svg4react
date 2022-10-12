## About

The `DrawCommand` type(s) are an alternative, typechecked syntax for defining SVG [path_commands][path-data].

## Related

- DrawArgs

| code |             name/description             |
| ---- | ---------------------------------------- |
| `M`  | moveto_absolute                          |
| `m`  | moveto_relative                          |
| `L`  | lineto_absolute                          |
| `l`  | lineto_relative                          |
| `H`  | horizontal_lineto_absolute               |
| `h`  | horizontal_lineto_relative               |
| `V`  | vertical_lineto_absolute                 |
| `v`  | vertical_lineto_relative                 |
| `C`  | curveto_absolute                         |
| `c`  | curveto_relative                         |
| `S`  | smooth_curveto_absolute                  |
| `s`  | smooth_curveto_relative                  |
| `Q`  | quadratic_bezier_curveto_absolute        |
| `q`  | quadratic_bezier_curveto_relative        |
| `T`  | smooth_quadratic_bezier_curveto_absolute |
| `t`  | smooth_quadratic_bezier_curveto_relative |
| `A`  | elliptical_arc_absolute                  |
| `a`  | elliptical_arc_relative                  |
| `Z`  | closepath                                |
| `z`  | closepath *(but lowercase)*              |

|   code    |             name/description             |
| --------- | ---------------------------------------- |
| `M` / `m` | moveto_absolute                          |
| `L` / `l` | lineto_absolute                          |
| `H` / `h` | horizontal_lineto_absolute               |
| `V` / `v` | vertical_lineto_absolute                 |
| `C` / `c` | curveto_absolute                         |
| `S` / `s` | smooth_curveto_absolute                  |
| `Q` / `q` | quadratic_bezier_curveto_absolute        |
| `T` / `t` | smooth_quadratic_bezier_curveto_absolute |
| `A` / `a` | elliptical_arc_absolute                  |
| `Z` / `z` | closepath                                |

|          type          |   code    |        name/description         |
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
| ClosePath              | `Z` / `z` | closepath                       |

[path-data]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
