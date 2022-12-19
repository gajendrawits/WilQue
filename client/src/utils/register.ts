import * as Yup from "yup";
const regex = /^[a-zA-Z]+.[a-zA-Z]+@(thewitslab)+\.[a-zA-Z]{2,3}$/;
const VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string()
    .required("Email is mandatory")
    .matches(/^\S/, "First character cannot be space.")
    .matches(regex, "Please enter the only thewitslab email."),

  password: Yup.string()
    .required("Password is mandatory")
    .matches(/^(?! )[a-zA-Z0-9_@./()#!@$%*^&+-\s]*$/, {
      excludeEmptyString: true,
      message: "First character cannot be space.",
    })
    .min(4, "Password Must be atleast 4 characters"),

  confirmpassword: Yup.string()
    .required("Confirm Password is mandatory")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

export { VALIDATION_SCHEMA };
