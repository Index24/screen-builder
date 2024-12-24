import { useEditor } from "@tiptap/react";
import type { Editor, JSONContent } from "@tiptap/core";
import { EditorExtensions } from "../extension/editor-extensions";

declare global {
  interface Window {
    editor: Editor | null;
  }
}

const initialContent: JSONContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "simple",
        },
        {
          type: "text",
          text: " example",
        },
      ],
    },
  ],
};

export function useScreenEditor() {
  const editor = useEditor({
    content: initialContent,
    autofocus: true,
    extensions: [...EditorExtensions()],
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        class: "min-h-full bg-white",
      },
    },
  });

  window.editor = editor;

  return { editor };
}
