import {
  Document,
  Text,
  Alert,
  SlashCommand,
  Paragraph,
  Bold,
  Italic,
} from ".";

export function EditorExtensions() {
  return [Alert, SlashCommand, Document, Text, Paragraph, Bold, Italic];
}
