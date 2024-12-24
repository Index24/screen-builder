import {
  AlertProps as MuiAlertProps,
  default as MuiAlert,
} from "@mui/material/Alert";

export type AlertProps = Pick<
  MuiAlertProps,
  "severity" | "color" | "variant" | "children"
>;

export const Alert = ({ children, severity, color, variant }: AlertProps) => {
  return (
    <MuiAlert variant={variant} severity={severity} color={color}>
      {children}
    </MuiAlert>
  );
};
