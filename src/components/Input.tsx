import type { InputHTMLAttributes } from "react";
import { ErrorMessage, Field } from "formik";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "name"> & {
  name: string;
  label: string;
};

const Input = ({ name, label, ...inputProps }: InputProps) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        aria-describedby={`${name}-error`}
        {...inputProps}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="form-error"
        id={`${name}-error`}
      />
    </div>
  );
};

export default Input;