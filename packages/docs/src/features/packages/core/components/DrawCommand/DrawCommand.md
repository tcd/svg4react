## Overview


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


## See Also


- [DrawArgs](/core/DrawArgs)

[path-data]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
