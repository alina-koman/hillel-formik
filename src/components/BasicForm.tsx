import { Form, Formik } from "formik";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Input from "./Input";
import {validationSchema} from "../helpers/validationSchema.ts";
import type {FormValues} from "../types/FormValues.ts";

const BasicForm = () => {
  return (
    <Formik<FormValues>
      initialValues={{ name: "", password: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={async (_values, { resetForm }) => {
        resetForm({ status: "Форму успішно надіслано!" });
        console.log(_values)
      }}
    >
      {({ isSubmitting, status }) => (
        <div className="form-layout">
          <Form className="basic-form" noValidate>
            <Paper className="form-card" elevation={0}>
              <div className="form-heading">
                <Typography component="h1" variant="h4">
                  Реєстрація
                </Typography>
                <Typography component="p" variant="body2" color="text.secondary">
                  Заповніть дані, щоб створити обліковий запис
                </Typography>
              </div>
              <Input
                name="name"
                label="Ім’я"
                placeholder="Введіть ім’я"
                autoComplete="name"
              />
              <Input
                name="password"
                label="Пароль"
                type="password"
                placeholder="Введіть пароль"
                autoComplete="new-password"
              />
              <Input
                name="email"
                label="Електронна пошта"
                type="email"
                placeholder="Введіть електронну пошту"
                autoComplete="email"
              />
              <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
                Надіслати
              </Button>
            </Paper>
          </Form>
          <div className="form-success-slot" role="status" aria-live="polite">
            {status && <Alert severity="success">{status}</Alert>}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default BasicForm;
