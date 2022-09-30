import debounce from "lodash/debounce"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LiveContext } from "react-live"
import MonacoEditor from "react-monaco-editor"

import { Actions, Selectors } from "@app/state"
import {
    customMonaco,
    CustomMonaco,
    DarkPlusMonacoTheme,
    configureMonaco,
    cleanCode,
} from "@app/features/live-demo"

export const PlaygroundEditor_debounced = (_props: unknown) => {

    const dispatch = useDispatch()
    const cachedValue = useSelector(Selectors.Playground.value)
    const editorRef = useRef<MonacoEditor>()
    const timerRef = useRef(null)
    const [cooledDown, _setCooledDown] = useState(true)
    const componentMounted = useRef(true)
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

    const dispatchChange = useCallback(() => {
        dispatch(Actions.Playground.setValue(theRealValue()))
    }, [dispatch, theRealValue])

    // =========================================================================

    const setCooledDown = (value: boolean) => {
        _setCooledDown(value)
    }
    const coolDown = () => {
        if (componentMounted?.current == true) {
            setCooledDown(true)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedOnChange = useCallback(
        debounce((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            updateLivePreview(event)
        }, DEBOUNCE_DURATION),
        [],
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedCoolDown = useCallback(
        debounce(() => {
            coolDown()
        }, DEBOUNCE_DURATION + 1_500),
        [],
    )

    // =========================================================================

    useEffect(() => {
        set_value(code)
    }, [code])

    useEffect(() => {
        if (cooledDown) {
            dispatchChange()
        }
        return () => {
            clearTimeout(timerRef?.current)
            componentMounted.current = false
        }
    }, [cooledDown, _value, dispatchChange])

    // =========================================================================

    const handleWillMount = (monaco: CustomMonaco): void => {
        monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    }

    const handleDidMount = (editor: customMonaco.editor.IStandaloneCodeEditor, monaco: CustomMonaco) => {
        configureMonaco(editor, monaco)
    }

    const handleChange = (value: string, _event: customMonaco.editor.IModelContentChangedEvent) => {
        updateLivePreview(cleanCode(value))
        setChanged(true)
        setCooledDown(false)
        set_value(value)
        timerRef.current = setTimeout(
            debouncedCoolDown,
            (DEBOUNCE_DURATION + 1_000),
        )
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

const DEBOUNCE_DURATION = 500

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
