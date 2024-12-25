import {
  Document,
  Text,
  Alert,
  SlashCommand,
  Paragraph,
  Bold,
  Italic,
  Link,
} from ".";

export function EditorExtensions() {
  return [
    Alert,
    SlashCommand,
    Document,
    Text,
    Paragraph,
    Bold,
    Italic,
    Link.configure({
      openOnClick: false,
    }),
  ];
}
