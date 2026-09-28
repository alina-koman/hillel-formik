import * as yup from "yup";

export const validationSchema = yup.object({
    name: yup.string().min(2, "Ім’я має містити щонайменше 2 символи").required("Введіть ім’я"),
    password: yup.string().min(8, "Пароль має містити щонайменше 8 символів").required("Введіть пароль"),
    email: yup.string().email("Введіть коректну електронну пошту").required("Введіть електронну пошту"),
});