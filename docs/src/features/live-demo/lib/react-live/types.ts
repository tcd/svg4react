/* eslint-disable @typescript-eslint/ban-types */
import type { PrismTheme } from "prism-react-renderer"

/**
 * @see [LiveProvider.js](https://github.com/FormidableLabs/react-live/blob/master/src/components/Live/LiveProvider.js)
 */
export type HelpfulLiveContext = {
    children?: Element
    code?: string
    disabled?: boolean
    language?: string
    noInline?: boolean
    scope?: Record<string, any>
    theme?: PrismTheme
    transformCode?: Function
    // -------------------------------------------------------------------------
    // not documented in prop types
    // -------------------------------------------------------------------------
    /**
     * @see [LiveEditor.js](https://github.com/FormidableLabs/react-live/blob/master/src/components/Live/LiveEditor.js#L6)
     */
    onChange?: Function
    /**
     * @see [LivePreview.js](https://github.com/FormidableLabs/react-live/blob/master/src/components/Live/LivePreview.js#L6)
     */
    element?: Element
    /**
     * @see [LiveError.js](https://github.com/FormidableLabs/react-live/blob/master/src/components/Live/LiveError.js#L5)
     */
    error?: any
}

export type WithLiveProps = {
    code?: string
    error?: string
    onError?: Function
    onChange?: Function
    element?: Element
}
