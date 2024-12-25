import { Editor } from "@tiptap/core";
import { EditorView } from "@tiptap/pm/view";
import { BubbleMenu, useEditorState } from "@tiptap/react";
import { memo, useCallback } from "react";
import { isTextSelected } from "../../lib/isTextSelected";
import { Toolbar } from "../ui/Toolbar";
import { Icon } from "../ui/Icon";

// We memorize the button so each button is not rerendered
// on every editor state change
const MemoButton = memo(Toolbar.Button);

type TextMenuProps = {
  editor: Editor;
};

export const TextMenu = ({ editor }: TextMenuProps) => {
  const { isBold, isItalic } = useEditorState({
    editor,
    selector: (context) => {
      return {
        isBold: context.editor.isActive("bold"),
        isItalic: context.editor.isActive("italic"),
      };
    },
  });

  const shouldShow = useCallback(
    ({ view }: { view: EditorView }) => {
      if (!view || editor.view.dragging) {
        return false;
      }

      return isTextSelected({ editor });
    },
    [editor],
  );

  const onBold = useCallback(
    () => editor.chain().focus().toggleBold().run(),
    [editor],
  );
  const onItalic = useCallback(
    () => editor.chain().focus().toggleItalic().run(),
    [editor],
  );

  return (
    <BubbleMenu
      tippyOptions={{
        popperOptions: {
          placement: "top-start",
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                boundary: "viewport",
                padding: 8,
              },
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["bottom-start", "top-end", "bottom-end"],
              },
            },
          ],
        },
        maxWidth: "calc(100vw - 16px)",
      }}
      shouldShow={shouldShow}
      editor={editor}
      pluginKey="textMenu"
      updateDelay={100}
    >
      <Toolbar.Wrapper>
        <MemoButton
          tooltip="Bold"
          tooltipShortcut={["Mod", "B"]}
          onClick={onBold}
          active={isBold}
        >
          <Icon name="Bold" />
        </MemoButton>
        <MemoButton
          tooltip="Italic"
          tooltipShortcut={["Mod", "I"]}
          onClick={onItalic}
          active={isItalic}
        >
          <Icon name="Italic" />
        </MemoButton>
      </Toolbar.Wrapper>
    </BubbleMenu>
  );
};
