import * as yup from "yup";

const isRequiredMessage = "This field is required";

export default yup.object().shape({
  nickname: yup
    .string()
    .required("No nickname provided")
    .min(5, "The nickname must have at least 5 characters")
    .max(10, "The nickname cannot exceed 10 characters"),
  age: yup
    .number()
    .required("No age provided")
    .positive("age has to be positive")
    .min(12, "Age must be over 12")
    .max(90, "Age cannot exceed 90"),

  email: yup.string().required(isRequiredMessage).email(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

  changepassword: yup.string().when("password", {
    is: (val: string | any[]) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both password need to be the same"),
  }),
});
