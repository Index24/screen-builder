import { mergeAttributes } from "@tiptap/core";
import { Link as TiptapLink } from "@tiptap/extension-link";

export const Link = TiptapLink.extend({
  parseHTML() {
    return [
      {
        tag: "a[href]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "a",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: "link",
      }),
      0,
    ];
  },
});

export default Link;
