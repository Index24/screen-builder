import { Node } from "@tiptap/core";
import { Typography } from "@mui/material";
import {
  NodeViewWrapper,
  NodeViewContent,
  ReactNodeViewRenderer,
} from "@tiptap/react";

const ParagraphNodeView = () => {
  return (
    <NodeViewWrapper>
      <Typography>
        <NodeViewContent />
      </Typography>
    </NodeViewWrapper>
  );
};

export const Paragraph = Node.create({
  name: "paragraph",
  priority: 1000,
  content: "inline*",
  group: "block",

  addAttributes() {
    return {
      type: {
        default: "Typography",
        parseHTML: (element) => element.getAttribute("data-type"),
        renderHTML: (attributes) => {
          return { "data-type": attributes.type };
        },
      },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(ParagraphNodeView);
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", { "data-type": "Typography", ...HTMLAttributes }, 0];
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="Typography"]',
      },
    ];
  },
});
