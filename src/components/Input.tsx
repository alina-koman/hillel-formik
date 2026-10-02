import { Field } from "formik";
import type { FieldProps } from "formik";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import type { FormValues } from "../types/FormValues.ts";

type InputProps = Omit<
  TextFieldProps,
  "name" | "label" | "error" | "helperText" | "variant" | "fullWidth"
> & {
  name: string;
  label: string;
};

const Input = ({ name, label, ...inputProps }: InputProps) => {
  return (
    <div className="form-field">
      <Field
        name={name}
      >
        {({ field, meta }: FieldProps<string, FormValues>) => (
          <TextField
            {...field}
            {...inputProps}
            id={name}
            label={label}
            fullWidth
            variant="outlined"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error ? meta.error : " "}
          />
        )}
      </Field>
    </div>
  );
};

export default Input;