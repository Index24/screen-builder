import { Placeholder, StarterKit, Alert, SlashCommand, Paragraph } from ".";

export function EditorExtensions() {
  return [
    StarterKit.configure({
      paragraph: false,
    }),
    Placeholder,
    Alert,
    SlashCommand,
    Paragraph,
  ];
}
