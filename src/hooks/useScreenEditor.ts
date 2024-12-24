import { useEditor } from "@tiptap/react";
import type { Editor } from "@tiptap/core";
import { EditorExtensions } from "../extension/editor-extensions";

declare global {
  interface Window {
    editor: Editor | null;
  }
}

export function useScreenEditor() {
  const editor = useEditor({
    content: `<p>This is a simple <b>editor</b> example.</p>`,
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
