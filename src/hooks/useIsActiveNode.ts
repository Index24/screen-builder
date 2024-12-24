import { Editor } from "@tiptap/core";
import { useEffect, useState } from "react";
import type { Node } from "@tiptap/pm/model";

type UseIsActiveNodeProps = {
  editor: Editor;
  getPos: () => number;
  node: Node;
};

export function useIsActiveNode({
  editor,
  getPos,
  node,
}: UseIsActiveNodeProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleSelectionUpdate = () => {
      const selection = editor.state.selection;
      const from = selection.from;
      const to = selection.to;
      const pos = getPos();

      setIsActive(from >= pos && to <= pos + node.nodeSize);
    };

    editor.on("selectionUpdate", handleSelectionUpdate);

    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, getPos, node]);

  return isActive;
}
