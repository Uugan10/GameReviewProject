import * as yup from "yup";

export const validationSchema = yup.object().shape({
    userName: yup
    .string()
    .min(5)
    .required("Minimum 5 Username characters lenght required"),
    zipCode: yup.string().min(5).required("Zip Code Required"),
    email: yup.string().email().required("email Required"),
    passWord: yup.string().min(5).required("passWord Required"),
    confirmPassWord: yup.string(5).required("confirmPassWord Required"),
});