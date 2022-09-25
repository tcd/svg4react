import { monacoApi, MonacoApi } from "."

/**
 * Add a keyboard shortcut to a monaco editor instance.
 *
 * @see https://microsoft.github.io/monaco-editor/playground.html#interacting-with-the-editor-adding-an-action-to-an-editor-instance
 */
export const addShortcut = (editor: monacoApi.editor.IStandaloneCodeEditor, monaco: MonacoApi): void => {
    editor.addAction({
        // An unique identifier of the contributed action.
        id: "custom-inspectTokens",
        // A label of the action that will be presented to the user.
        label: "Inspect Editor Tokens & Scopes",
        // A precondition for this action.
        precondition: null,
        // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
        keybindingContext: null,
        contextMenuGroupId: "navigation",
        contextMenuOrder: 1.5,
        keybindings: [
            monaco.KeyMod.chord(
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK,
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK,
            ),
        ],
        // Method that will be executed when the action is triggered.
        // @param editor The editor instance is passed in as a convenience
        run: function (ed) {
            ed.trigger("handleDidMount", "editor.action.inspectTokens", {})
        },
    })
}
