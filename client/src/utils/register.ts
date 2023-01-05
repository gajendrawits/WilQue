import * as Yup from "yup";
const regex = /^[a-zA-Z.]+@(thewitslab)+\.[a-zA-Z]{2,3}$/;
const regex2 = /^[a-zA-Z0-9@#$%^&*\S]*$/;
const VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string()
    .lowercase()
    .required("Email is mandatory")
    .matches(/^\S/, "First character cannot be space.")
    .email("Enter valid email")
    .matches(regex, "Please enter the only thewitslab email."),

  password: Yup.string()
    .required("Password is mandatory")
    .matches(/^\S/, "First character cannot be space.")
    .matches(regex2, "This Special character is not alllow.")
    .min(4, "Password Must be atleast 4 characters")
    .max(30, "Password not more than 30 Characters"),

  confirmpassword: Yup.string()
    .required("Confirm Password is mandatory")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

export { VALIDATION_SCHEMA };
