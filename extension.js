
const vscode = require('vscode');





/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const create_simple_comment_header = (header) => {

		// two for spaces, two for hastags.
		let hashtag_len = header.length + 2 + 2

		let comment_header = `${"#".repeat(hashtag_len)}
# ${header} #
${"#".repeat(hashtag_len)}`

		return comment_header
	}

	const simple_comment_header = vscode.commands.registerCommand("comment-headers.simple", function () {


		vscode.window.showInformationMessage('Hello World from comment-headers!');

		vscode.window.showInputBox({
			placeHolder: 'Type in your response'
		}).then((value) => {
			const editor = vscode.window.activeTextEditor

			editor.edit(
				builder => {
					if (editor.selection.isEmpty) {
						const position = editor.selection.active;

						let simple_header = create_simple_comment_header(value)

						builder.insert(position, simple_header)

					}
				}
			)


		})



	})






	context.subscriptions.push(simple_comment_header);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
