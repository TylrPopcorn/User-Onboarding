import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is required mane.")
        .min(3, "Username must be 3 chars long!")
    ,
    email: yup
        .string()
        .trim()
        .email("Must be a valid email")
        .required("An email address is required.")
    ,
    password: yup
        .string()
        .required('password is required')
        .min(6, "Password must be 6 chars long")
    ,
    checked: yup
        .boolean()
        .oneOf([true], "Must accept")
})

export default formSchema
