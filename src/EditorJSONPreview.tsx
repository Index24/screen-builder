import { Editor } from "@tiptap/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const EditorJSONPreview = ({ editor }: { editor: Editor }) => {
  return (
    <section className="w-1/3 overflow-auto">
      <h2>JSON Preview</h2>
      <SyntaxHighlighter language="json" style={atomOneLight}>
        {JSON.stringify(editor.getJSON(), null, 2)}
      </SyntaxHighlighter>
    </section>
  );
};
