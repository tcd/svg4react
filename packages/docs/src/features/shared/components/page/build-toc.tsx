import type { ReactElement, ReactNode } from "react"
import { deepFilter, deepFind, deepForEach, deepMap } from "react-children-utilities"

interface Props {
    children?: ReactNode;
}

export const DeepFound = ({ children }: Props): ReactElement => (
    <div>{deepFind(children, (child: ReactNode) => (child as ReactElement).props?.["data-toc-item"])}</div>
)

/**
 * @see [React Children Utilities - `deepMap()`](https://fernandopasik.com/react-children-utilities/deep-map)
 */
export const buildToc = (children: ReactNode | ReactNode[]): [children: ReactNode | ReactNode[], toc: TocItem[]] => {
    // const childNodes = Array.isArray(children) ? children : [children]
    const toc: any = []
    const forEachFunc = (_child: ReactNode, index?: number, children?: ReactNode[]) => {
        const child = _child as JSX.Element
        if (child?.props?.["data-toc-item"]) {
            debugger
            return true
        }
        if (child?.props?.children) {
            return !!deepFind(child?.props?.children, forEachFunc)
        }
        return false
    }
    // const childrenForToc = deepForEach(
    //     children,
    //     (child: ReactNode, index?: number, children?: ReactNode[]) => {
    //         // console.log(child?._owner?.elementType?.name)
    //         console.log((child as JSX.Element)?.props)
    //     },
    // )
//     const tocChild = deepFind(
//         children,
//         (child: ReactNode, index?: number, children?: ReactNode[]) => {
//             // console.log(child?._owner?.elementType?.name)
//
//             return !!(child as JSX.Element)?.props?.["data-toc-item"]
//         },
//     )
    const tocChild = deepFind(children, forEachFunc)
    console.log(tocChild)

    return [children, []]
}
