import * as vscode from 'vscode'
import { getFunctionNode } from './main'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "deleteFunction" is now active!')

  let disposable = vscode.commands.registerCommand('deleteFunction.deleteFunction', () => {
    const editor = vscode.window.activeTextEditor

    console.log('editor', editor)

    if (!editor) {
      return
    }

    // 获取代码
    const code = editor.document.getText()

    const index = editor.document.offsetAt(editor.selection.active)

    const functionCode = getFunctionNode(code, index)

    if (!functionCode) {
      return
    }

    const targetPosition = new vscode.Range(
      new vscode.Position(functionCode.start.line - 1, functionCode.start.line - 1),
      new vscode.Position(functionCode.end.line - 1, functionCode.end.line)
    )

    editor.edit((editBuilder) => {
      editBuilder.delete(targetPosition)
      vscode.window.showWarningMessage(`函数 ${functionCode.name} 已删除！`)
    })
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
