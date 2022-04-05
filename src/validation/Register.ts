import * as yup from "yup";

const RegisterFormValidation = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(3).required(),
	password_confirmation: yup.string().min(3).required(),
});

export default RegisterFormValidation;
