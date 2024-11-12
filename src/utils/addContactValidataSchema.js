import * as Yup from "yup";


const phonePattern = /^\d{3}-\d{3}-\d{4}$/
	
const addContactValidataSchema = Yup.object({
	name: Yup.string()
		.min(2, "Name must contain more than two characters.")
		.max(15, "Name must contain less than 15 characters.")
		.required("The 'Name' field cannot be empty."),
	number: Yup.string()
		.required("The 'Number' field cannot be empty.")
		.matches(phonePattern, "Invalid number. Enter the number in the format 000-000-0000."),
});

export default addContactValidataSchema;