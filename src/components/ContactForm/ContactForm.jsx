import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import addContactValidataSchema from "../../utils/addContactValidataSchema";
import {apiPostContact} from "../../redux/contacts/slice";

export default function ContactForm({setModalIsOpen}) {
	
	const dispatch = useDispatch();
	
	
	function onSubmit(data, actions) {
		dispatch(apiPostContact(data));
		actions.resetForm();
		setModalIsOpen();
		return;
	}

	const INITIAL__VALUE = {
	 	name: "",
	      number: "",
	}

	return (
		<Formik initialValues={INITIAL__VALUE}
			onSubmit={onSubmit}
			validationSchema={addContactValidataSchema}>
			<Form className="form">
				<label className="label">
					<Field className="input"
						type='text'
						name='name'
						placeholder=" "
					/>
					<span className="descript">Name</span>
					<ErrorMessage className="error"
						name='name'
						component="span" />
				</label>
				<label className="label">
					<Field className="input"
						type='text'
						name='number'
						placeholder=" "
					/>
					<span className="descript">Number</span>
					<ErrorMessage className="error"
						name='number'
						component="span" />
				</label>
                        <button className='btn' type="submit">Add contact</button>
			</Form>

		</Formik>
	)
}