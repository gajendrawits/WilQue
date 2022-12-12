import * as Yup from "yup";

const VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string()
    .required("Email is mandatory")
    .matches(
      /^[a-zA-Z0-9._-]+@(thewitslab)+\.[a-zA-Z]{2,4}$/,
      "Please Enter valid Email"
    ),
  password: Yup.string()
    .required("Password is mandatory")
    .matches(
      /^(?! )[a-zA-Z0-9@#$%^&*\s]*$/,
      "First Character Space not allowed."
    )
    .min(4, "Password Must be at least 4 Characters")
    .max(12, "Password Must be at most 12 Characters"),
});

export { VALIDATION_SCHEMA };
