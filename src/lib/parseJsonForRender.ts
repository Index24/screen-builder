import { JSONContent } from "@tiptap/core";

export function parseJsonForRender(json: JSONContent): JSONContent {
  function traverse(node: JSONContent): JSONContent {
    if (node.type === "paragraph" && node.content) {
      let result = "";
      let marks = [];

      for (const child of node.content) {
        if (child.type !== "text") {
          continue;
        }

        if (!child.marks) {
          result += child.text;
          continue;
        }

        let textWithMarks = child.text;
        for (const mark of child.marks) {
          if (mark.type === "bold") {
            textWithMarks = `<b>${textWithMarks}</b>`;
          }

          if (mark.type === "italic") {
            textWithMarks = `<i>${textWithMarks}</i>`;
          }

          if (mark.type === "link") {
            marks.push({
              type: "link",
              ...(mark.attrs ? mark.attrs : {}),
            });
            textWithMarks = `<a>${textWithMarks}</a>`;
          }
        }
        result += textWithMarks;
      }

      return {
        type: "paragraph",
        text: result,
        marks: marks.length > 0 ? marks : undefined,
      };
    }

    if (node.content) {
      node.content = node.content.map(traverse);
    }

    return node;
  }

  return traverse(json);
}
