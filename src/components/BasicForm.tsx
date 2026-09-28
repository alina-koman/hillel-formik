import { Form, Formik } from "formik";
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
        <>
          <Form className="basic-form" noValidate>
            <h1>Реєстрація</h1>
            <Input
              name="name"
              label="Ім’я"
              placeholder="Введіть ім’я"
            />
            <Input
              name="password"
              label="Пароль"
              type="password"
              placeholder="Введіть пароль"
            />
            <Input
              name="email"
              label="Електронна пошта"
              type="email"
              placeholder="Введіть електронну пошту"
            />
            <button type="submit" disabled={isSubmitting}>
              Надіслати
            </button>
          </Form>
          <div className="form-success-slot" role="status" aria-live="polite">
            {status && <p className="form-success">{status}</p>}
          </div>
        </>
      )}
    </Formik>
  );
};

export default BasicForm;
