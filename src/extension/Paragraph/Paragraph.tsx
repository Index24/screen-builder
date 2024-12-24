import { mergeAttributes, Node } from "@tiptap/core";
import { Typography } from "@mui/material";
import {
  NodeViewWrapper,
  NodeViewContent,
  ReactNodeViewRenderer,
} from "@tiptap/react";

const ParagraphNodeView = () => {
  return (
    <NodeViewWrapper as={"div"}>
      <Typography>
        <NodeViewContent as={"span"} />
      </Typography>
    </NodeViewWrapper>
  );
};

export const Paragraph = Node.create({
  name: "paragraph",
  priority: 1000,
  content: "inline*",
  group: "block",

  addNodeView() {
    return ReactNodeViewRenderer(ParagraphNodeView);
  },

  parseHTML() {
    return [
      {
        tag: "p",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["p", mergeAttributes(HTMLAttributes), 0];
  },
});
