import { Component } from "react"
import MonacoEditor from "react-monaco-editor"

import { MonacoApi, monacoApi } from "@app/features/monaco"
import { exampleContent } from "./example"

interface Props {}

interface State {
    code: string
}

const MY_SPECIAL_LANGUAGE = "mySpecialLanguage"

export class MonacoExample1 extends Component<Props, State> {

    // public editor?: monacoEditor.editor.IStandaloneCodeEditor;

    constructor(props: Props) {
        super(props)
        this.state = {
            code: exampleContent(),
        }
    }

    public onChange(newValue: string, editor: any): void {
        console.log("onChange", newValue, editor)
    }

    public editorDidMount(editor: monacoApi.editor.IStandaloneCodeEditor, _monaco: MonacoApi): void {
        console.log("editorDidMount", editor)
        // this.editor = editor;
        editor.focus()
    }

    public editorWillMount(monaco: MonacoApi): void {
        console.log("editorWillMount", monaco)
        // Register a new language
        monaco.languages.register({ id: MY_SPECIAL_LANGUAGE })

        // Register a tokens provider for the language
        monaco.languages.setMonarchTokensProvider(MY_SPECIAL_LANGUAGE, {
            tokenizer: {
                root: [
                    [/\[error.*/, "custom-error"],
                    [/\[notice.*/, "custom-notice"],
                    [/\[info.*/, "custom-info"],
                    [/\[[a-zA-Z 0-9:]+\]/, "custom-date"],
                ],
            },
        })

        // Define a new theme that contains only rules that match this language
        monaco.editor.defineTheme("myCoolTheme", {
            base: "vs",
            inherit: false,
            rules: [
                { token: "custom-info", foreground: "808080" },
                { token: "custom-error", foreground: "ff0000", fontStyle: "bold" },
                { token: "custom-notice", foreground: "FFA500" },
                { token: "custom-date", foreground: "008800" },
            ],
            colors: {
                "editor.foreground": "#000000",
            },
        })

        // Register a completion item provider for the new language
        monaco.languages.registerCompletionItemProvider(MY_SPECIAL_LANGUAGE, {
            // @ts-ignore:next-line
            provideCompletionItems: () => {
                const suggestions = [
                    {
                        label: "simpleText",
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: "simpleText",
                    },
                    {
                        label: "testing",
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: "testing(${1:condition})",
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: "ifelse",
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: [
                            "if (${1:condition}) {",
                            "\t$0",
                            "} else {",
                            "\t",
                            "}",
                        ].join("\n"),
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: "If-Else Statement",
                    },
                ]
                return { suggestions: suggestions }
            },
        })
    }

    public render(): JSX.Element {
        const code = this.state.code
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            // cursorStyle: "line",
            automaticLayout: false,
            theme: "myCoolTheme",
            value: code,
            language: MY_SPECIAL_LANGUAGE,
        }
        return (
            <MonacoEditor
                width="1000"
                height="600"
                language="json"
                // theme="vs-dark"
                // value={code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
                editorWillMount={this.editorWillMount}
            />
        )
    }
}
