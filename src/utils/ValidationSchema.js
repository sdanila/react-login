import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  emailValue: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  passwordValue: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[A-Z])[a-zA-Z0-9]{4,10}$/,
      'Must Contain must contain 4 to 10 characters, one uppercase'
    )
});