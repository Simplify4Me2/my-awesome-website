import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export function ToggleSwitch() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch />} label="Dark Mode" />
    </FormGroup>
  );
}
