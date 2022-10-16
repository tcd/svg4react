## Overview


The `DrawCommand` type is an alternative, typechecked syntax for defining SVG [*path commands*][path-data].

When passed as props, `DrawCommand`s are always arrays.

The following components have `DrawCommand` props:

- [Path](/components/Path) (`PathProps.commands`)


## Definition


```typescript
type DrawCommand =
    | ["M", DrawArgs.M[]]
    | ["m", DrawArgs.m[]]
    | ["L", DrawArgs.L[]]
    | ["l", DrawArgs.l[]]
    | ["H", DrawArgs.H[]]
    | ["h", DrawArgs.h[]]
    | ["V", DrawArgs.V[]]
    | ["v", DrawArgs.v[]]
    | ["C", DrawArgs.C[]]
    | ["c", DrawArgs.c[]]
    | ["S", DrawArgs.S[]]
    | ["s", DrawArgs.s[]]
    | ["Q", DrawArgs.Q[]]
    | ["q", DrawArgs.q[]]
    | ["T", DrawArgs.T[]]
    | ["t", DrawArgs.t[]]
    | ["A", DrawArgs.A[]]
    | ["a", DrawArgs.a[]]
    | ["Z", DrawArgs.Z[]]
    | ["z", DrawArgs.z[]]
```


## See Also


- [DrawArgs](/core/DrawArgs)

[path-data]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
