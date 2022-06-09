import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name } }) => (
        <TextField
          margin="dense"
          fullWidth
          label={label}
          variant="outlined"
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disabled}
          error={errors[name]}
          helperText={errors[name]?.message}
          size="small"
          inputProps={{ style: { fontFamily: "Century Gothic,sans-serif" } }}
          InputLabelProps={{
            style: { fontFamily: "Century Gothic,sans-serif" },
          }}
        />
      )}
    />
  );
}
