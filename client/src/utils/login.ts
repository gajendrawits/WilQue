import * as Yup from "yup";
const regex2 = /^[a-zA-Z0-9@#$%^&*\s]*$/;
const VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string()
    .required("Email is mandatory")
    .email("Enter Valid Email")
    .matches(
      /^[a-zA-Z.]+@(thewitslab)+\.[a-zA-Z]{2,3}$/,
      "It can only accesss by witslab user."
    ),
  password: Yup.string()
    .required("Password is Mandatory.")
    .matches(/^\S/, "First character cannot be space.")
    .matches(regex2, "This Special character is not alllow.")
    .min(4, "Password Must be at least 4 Characters")
    .max(30, "Password not more than 30 Characters"),
});

export { VALIDATION_SCHEMA };
