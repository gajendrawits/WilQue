import * as Yup from "yup";

const VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string()
    .required("Email is mandatory")
    .email("Enter Valid Email")
    .matches(
      /^[a-zA-Z.]+@(thewitslab)+\.[a-zA-Z]{2,3}$/,
      "It can only accesss by witslab user."
    ),
  password: Yup.string()
    .required("Password is mandatory")
    .matches(
      /^(?! )[a-zA-Z0-9@#$%^&*\s]*$/,
      "First Character Space not allowed."
    )
    .min(4, "Password Must be at least 4 Characters"),
});

export { VALIDATION_SCHEMA };
