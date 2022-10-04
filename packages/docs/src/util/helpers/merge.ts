// eslint-disable-next-line no-restricted-imports
import _merge from "lodash/merge"
import isArray from "lodash/isArray"

/**
 * Wrapper around [`_.merge`](https://lodash.com/docs/4.17.15#merge) that does not mutate objects.
 */
export const merge = <TSource>(...sources: TSource[]): TSource => {
    if (!isArray(sources)) {
        throw new Error("[merge] invalid argument")
    }
    return _merge({}, ...sources)
}
