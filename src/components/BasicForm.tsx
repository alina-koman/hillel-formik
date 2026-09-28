import { Form, Formik } from "formik";
import * as yup from "yup";
import Input from "./Input";

type FormValues = {
  name: string;
  password: string;
  email: string;
};

const validationSchema = yup.object({
  name: yup.string().min(2, "Ім’я має містити щонайменше 2 символи").required("Введіть ім’я"),
  password: yup.string().min(8, "Пароль має містити щонайменше 8 символів").required("Введіть пароль"),
  email: yup.string().email("Введіть коректну електронну пошту").required("Введіть електронну пошту"),
});

const BasicForm = () => {
  return (
    <Formik<FormValues>
      initialValues={{ name: "", password: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
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
        <button type="submit">Надіслати</button>
      </Form>
    </Formik>
  );
};

export default BasicForm;
