import React, { Component } from "react"
import { render } from "react-dom"
import MonacoEditor from "react-monaco-editor"

export class SvgEditor extends Component {

    constructor(props) {
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
