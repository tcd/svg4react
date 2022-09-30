import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { LiveContext } from "react-live"
import MonacoEditor from "react-monaco-editor"

import { Actions } from "@app/state"
import {
    customMonaco,
    CustomMonaco,
    DarkPlusMonacoTheme,
    configureMonaco,
} from "@app/features/live-demo"

export const PlaygroundEditor = (_props: unknown) => {

    const dispatch = useDispatch()
    const editorRef = useRef<MonacoEditor>()
    const [_value, set_value] = useState<string>()
    const [changed, setChanged] = useState<boolean>(false)

    const {
        code,
        // TODO: File issue with https://github.com/FormidableLabs/react-live for better typings
        // @ts-ignore: next-line
        onChange: updateLivePreview,
    } = useContext(LiveContext)

    const theRealValue = useCallback(() => {
        if (changed) { return _value }
        return code
    }, [changed, code, _value])

    // =========================================================================

    useEffect(() => {
        set_value(code)
    }, [code])

    // =========================================================================

    const handleWillMount = (monaco: CustomMonaco): void => {
        monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    }

    const handleDidMount = (editor: customMonaco.editor.IStandaloneCodeEditor, monaco: CustomMonaco) => {
        configureMonaco(editor, monaco)
    }

    const handleChange = async (value: string, _event: customMonaco.editor.IModelContentChangedEvent) => {
        dispatch(Actions.Playground.setValue(value))
        updateLivePreview(value)
        setChanged(true)
    }

    return (
        <MonacoEditor
            ref={(node) => { editorRef.current = node }}
            className="s4r__editor"
            // width="800"
            height="600"
            value={theRealValue()}
            options={options}
            onChange={handleChange}
            editorDidMount={handleDidMount}
            editorWillMount={handleWillMount}
        />
    )
}

// =============================================================================

const options: customMonaco.editor.IStandaloneEditorConstructionOptions = {
    language: "typescript",
    theme: "dark-plus",
    // smartSelect: {
    //     selectLeadingAndTrailingWhitespace: false,
    // },
    // scrollBeyondLastLine: false,
    minimap: {
        enabled: false,
    },
    // for whatever reason, this doesn't work when set as an object
    // @ts-ignore: next-line
    "bracketPairColorization.enabled": false,
    fixedOverflowWidgets: true,
}
