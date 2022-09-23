import React, { Component, forwardRef, useRef } from "react"
import { render } from "react-dom"
import MonacoEditor from "react-monaco-editor"

import { monacoApi, MonacoApi } from ".."

export interface SvgEditorProps {
    code: string
}

export const SvgEditor = forwardRef(function SvgEditor(props: SvgEditorProps, ref) {

    const editorDidMount = (editor: monacoApi.editor.IStandaloneCodeEditor, monaco: MonacoApi) => {

    }

    const onChange = (value: string, event: monacoApi.editor.IModelContentChangedEvent) => {

    }

    return (
        <MonacoEditor
            ref={ref}
            width="800"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={props.code}
            // options={options}
            onChange={onChange}
            editorDidMount={editorDidMount}
        />
    )
})

export class SvgEditorClass extends Component<SvgEditorProps> {

    constructor(props: SvgEditorProps) {
        super(props)
        this.state = {
            code: "// type your code...",
        }
        this.onChange = this.onChange.bind(this)
        this.editorDidMount = this.editorDidMount.bind(this)
    }

    editorDidMount(editor, monaco) {
        console.log("editorDidMount", editor)
        editor.focus()
    }

    onChange(newValue, e) {
        console.log("onChange", newValue, e)
    }

    render() {
        const code = this.state.code
        const options = {
            selectOnLineNumbers: true,
        }
        return (
            <MonacoEditor
                width="800"
                height="600"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
            />
        )
    }
}
