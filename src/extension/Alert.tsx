import { Node, NodeViewProps, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { Alert as AlertComponent, type AlertProps } from "../components/Alert";
import { useIsActiveNode } from "../hooks/useIsActiveNode";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Stack } from "@mui/material";
type AlertColor = AlertProps["color"];
type AlertSeverity = AlertProps["severity"];

const SEVERITIES: AlertSeverity[] = ["error", "info", "success", "warning"];
const COLORS: AlertColor[] = ["error", "info", "success", "warning"];
const VARIANTS: AlertProps["variant"][] = ["filled", "outlined", "standard"];

const AlertNodeView = ({
  node,
  updateAttributes,
  editor,
  getPos,
}: NodeViewProps) => {
  const { severity, color, variant } = node.attrs;
  const isActive = useIsActiveNode({ editor, getPos, node });

  return (
    <NodeViewWrapper>
      <AlertComponent severity={severity} color={color} variant={variant}>
        <NodeViewContent />
      </AlertComponent>
      {isActive ? (
        <Stack mt={1}>
          <FormControl>
            <FormLabel id="severities">Severities</FormLabel>
            <RadioGroup
              row
              aria-labelledby="severities"
              name="severitiey"
              onChange={(event) =>
                updateAttributes({ severity: event.target.value })
              }
              value={severity}
            >
              {SEVERITIES.map((severity) => (
                <FormControlLabel
                  key={severity}
                  value={severity}
                  control={<Radio />}
                  label={severity}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="colors">Colors</FormLabel>
            <RadioGroup
              row
              aria-labelledby="colors"
              name="colors"
              onChange={(event) =>
                updateAttributes({ color: event.target.value })
              }
              value={color}
            >
              {COLORS.map((color) => (
                <FormControlLabel
                  key={color}
                  value={color}
                  control={<Radio />}
                  label={color}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="variants">Variants</FormLabel>
            <RadioGroup
              row
              aria-labelledby="variants"
              name="variants"
              onChange={(event) =>
                updateAttributes({ variant: event.target.value })
              }
              value={variant}
            >
              {VARIANTS.map((variant) => (
                <FormControlLabel
                  key={variant}
                  value={variant}
                  control={<Radio />}
                  label={variant}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Stack>
      ) : null}
    </NodeViewWrapper>
  );
};

export const Alert = Node.create({
  name: "Alert",
  group: "block",
  content: "inline*",

  addAttributes() {
    return {
      severity: {
        default: "info",
        parseHTML: (element) => element.getAttribute("data-severity"),
        renderHTML: (attributes) => ({
          "data-severity": attributes.severity,
        }),
      },
      color: {
        default: "info",
        parseHTML: (element) => element.getAttribute("data-color"),
        renderHTML: (attributes) => ({
          "data-color": attributes.color,
        }),
      },
      variant: {
        default: "filled",
        parseHTML: (element) => element.getAttribute("data-variant"),
        renderHTML: (attributes) => ({
          "data-variant": attributes.variant,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="Alert"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes({ "data-type": "Alert" }, HTMLAttributes),
      0,
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(AlertNodeView);
  },
});
