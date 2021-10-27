import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[A-Z])[a-zA-Z0-9]{4,10}$/,
      'Must Contain must contain 4 to 10 characters, one uppercase'
    )
});


export const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[A-Z])[a-zA-Z0-9]{4,10}$/,
      'Must Contain must contain 4 to 10 characters, one uppercase'
    ),
  repeatPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), ''], 'Both password need to be the same')
});

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('Required'),
  newPassword: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[A-Z])[a-zA-Z0-9]{4,10}$/,
      'Must Contain must contain 4 to 10 characters, one uppercase'
    ),
  repeatPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('newPassword'), ''], 'Both password need to be the same')
})