import { ReactNode, useState } from "react"
import { createContext } from "react"

export interface TSvgContext {
    svgId: string
}

const defaultValue: TSvgContext = {
    svgId: undefined,
}

const SvgContext = createContext<TSvgContext>(defaultValue)

export type SvgContextProviderProps = {
    children: ReactNode
    svgId: string
}

export const SvgContextProvider = (props: SvgContextProviderProps) => {

    const {
        children = undefined,
    } = props

    const [svgId, setSvgId] = useState<string>(props?.svgId)
    const [ids, setIds] = useState<Map<string, string>>(new Map<string, string>())

    return (
        <SvgContext.Provider value={defaultValue}>
            {children && children}
        </SvgContext.Provider>
    )
}
