import { Group } from "./types";

export const GROUPS: Group[] = [
  {
    name: "ui",
    title: "UI",
    commands: [
      {
        name: "alert",
        label: "Alert",
        iconName: "CircleAlert",
        description: "Disclaimer or warning",
        action: (editor) =>
          editor
            .chain()
            .focus()
            .insertContent({
              type: "Alert",
              attrs: { severity: "info", color: "info" },
              content: [{ type: "text", text: "Ваш текст в Alert" }],
            })
            .run(),
      },
    ],
  },
];

export default GROUPS;
