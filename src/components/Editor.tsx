import { useRef } from "react";
import { useScreenEditor } from "../hooks/useScreenEditor";
import { EditorContent } from "@tiptap/react";
import { ContentItemMenu } from "./menus/ContentItemMenu";
import { EditorJSONPreview } from "../EditorJSONPreview";
import { TextMenu } from "./TextMenu";
import { LinkMenu } from "./menus/LinkMenu";

export const Editor = () => {
  const menuContainerRef = useRef(null);
  const { editor } = useScreenEditor();

  if (!editor) {
    return null;
  }

  return (
    <div
      className="relative flex h-full overflow-hidden"
      ref={menuContainerRef}
    >
      <EditorContent
        editor={editor}
        className="flex-1 overflow-y-auto bg-stone-100"
      />
      <ContentItemMenu editor={editor} />
      <LinkMenu editor={editor} appendTo={menuContainerRef} />
      <TextMenu editor={editor} />
      <EditorJSONPreview editor={editor} />
    </div>
  );
};
