import * as Yup from "yup";


const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	
const logInValidateSchema = Yup.object({
	email: Yup.string()
		.required("The 'Email' field cannot be empty.")
		.matches(emailPattern, "Invalid email. Please enter an email in the format test@email.com"),
	password: Yup.string()
		.required("The 'Password' field cannot be empty.")
});

export default logInValidateSchema;