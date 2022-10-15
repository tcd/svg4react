## Overview

Shorthand for the setting the values of `viewBox`

If only one value is passed, it will be assigned to both `width` and `height`.

`minX` and `minY` are set to 0, resulting in `"0 0 {width} {height}"`.

Will **not** override `viewBox` if both are passed.
