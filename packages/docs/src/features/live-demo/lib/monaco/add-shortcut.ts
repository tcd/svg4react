import type { customMonaco, CustomMonaco } from "@app/features/live-demo"

/**
 * Add a keyboard shortcut to a monaco editor instance.
 *
 * @see https://microsoft.github.io/monaco-editor/playground.html#interacting-with-the-editor-adding-an-action-to-an-editor-instance
 */
export const addShortcut = (editor: customMonaco.editor.IStandaloneCodeEditor, monaco: CustomMonaco): void => {
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
            ed.trigger("[addShortcut]", "editor.action.inspectTokens", {})
        },
    })
    editor.addAction({
        // An unique identifier of the contributed action.
        id: "custom-show-command-palette",
        // A label of the action that will be presented to the user.
        label: "Command Palette",
        // A precondition for this action.
        precondition: null,
        // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
        keybindingContext: null,
        contextMenuGroupId: "navigation",
        contextMenuOrder: 1,
        keybindings: [
            monaco.KeyMod.chord(
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK,
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyP,
            ),
        ],
        // Method that will be executed when the action is triggered.
        // @param editor The editor instance is passed in as a convenience
        run: function (ed) {
            ed.trigger("[addShortcut]", "editor.action.quickCommand", {})
        },
    })
}
