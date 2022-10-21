import { WithLiveProps } from "@app/features/live-demo"

export type LiveDemo2Props = WithLiveProps & {
    id: string
    title: string
    /** The code that should be rendered, apart from the user's edits */
    code: string
    /** Accepts custom globals that the `code` can use */
    scope: Record<string, any>
    /**
     * Evaluate and mount the inline code.
     *
     * @default false
     */
    inline?: boolean
}

export interface LiveDemo2State {
    showRaw: boolean
}
