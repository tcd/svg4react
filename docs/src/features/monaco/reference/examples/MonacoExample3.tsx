import { Component } from "react"
import MonacoEditor from "react-monaco-editor"

import { monacoApi, MonacoApi } from "@app/features/monaco"
import { MonacoConfigurator, } from "../MonacoConfigurator"
import { exampleContent, exampleConfig } from "./example"

interface Props {

}

interface State {
    code: string
    loading: boolean
}

export class MonacoExample3 extends Component<Props, State> {

    // public editor?: monacoEditor.editor.IStandaloneCodeEditor;

    public configurator: MonacoConfigurator

    constructor(props: Props) {
        super(props)
        this.state = {
            code: exampleContent(),
            loading: true,
        }
        this.configurator = new MonacoConfigurator(exampleConfig)
    }

    public onChange(newValue: string, editor: any): void {
        console.log("onChange", newValue, editor)
    }

    public editorDidMount = (editor: monacoApi.editor.IStandaloneCodeEditor, _monaco: MonacoApi): void => {
        console.log("editorDidMount", editor)
        this.setState({ ...this.state, loading: false })
        // this.editor = editor;
        // editor.focus();
    }

    public editorWillMount = (monaco: MonacoApi): void => {
        console.log("editorWillMount", monaco)
        this.configurator.configureMonaco(monaco)
    }

    public render = (): JSX.Element => {
        const options = this.configurator.options(this.state.code)
        return (
            <MonacoEditor
                width="1000"
                height="600"
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
                editorWillMount={this.editorWillMount}
            />
        )
    }
}
