## Overview

The `VB` type is a shorthand for the values of a `viewBox`.

Depending on its length, it will be evaluated differently.

## Evaluation

### Length of `1`

If only one value is passed, it will be assigned to both `width` and `height`.

```typescript
const oneValue: VB = [50] // => "0 0 50 50"
```

### Length of `2`

If two values are passed, they will be assigned to `width` and `height` respectively.

```typescript
const twoValues: VB = [50, 100] // => "0 0 50 100"
```

### Length of `3`

currently not supported.

### Length of `4`

If 4 values are passed, they will be assigned to `minX`, `minY`, `width` and `height` respectively.

```typescript
const twoValues: VB = [-25, 1, 50, 100] // => "-25 1 50 100"
```
