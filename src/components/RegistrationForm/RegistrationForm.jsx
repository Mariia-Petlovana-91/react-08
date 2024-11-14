import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import {apiRegistrationUser} from "../../redux/auth/slice";
import registrationValidateSchema from "../../utils/registrationValidateSchema";

export default function RegistrationForm() {
	const dispatch = useDispatch();

	function onSubmit(data, actions) {
		dispatch(apiRegistrationUser(data));
		actions.resetForm();
		return;
	}

	const INITIAL__VALUE = {
		name: "",
		email: "",
	      password: ""
	}

	return (
		<div className='block'>
			<div className='container'>
			<img src="/img/registration.jpg" alt="login photo" />
			<Formik initialValues={INITIAL__VALUE}
			onSubmit={onSubmit}
			validationSchema={registrationValidateSchema}>
				<Form className="form"
					autoComplete="off"
				>
				<label className="label">
					<Field className="input"
						type='text'
						name='name'
						placeholder=" "
						autoComplete="off"
					/>
					<span className="descript">Name</span>
					<ErrorMessage className="error"
						name='name'
						component="span"
						placeholder=" "
					/>
				</label>
				<label className="label">
					<Field className="input"
						type='email'
						name='email'
						placeholder=" "
						autoComplete="off"
					/>
					<span className="descript">Email</span>
					<ErrorMessage className="error"
						name='email'
						component="span" />
				</label>
				<label className="label">
					<Field className="input"
						type='password'
						name='password'
						placeholder=" "
						autoComplete="off"
					/>
					<span className="descript">Password</span>
					<ErrorMessage className="error"
						name='password'
						component="span" />
				</label>
                        <button className='btn' type="submit">Sing Up</button>
			</Form>
		      </Formik>
			</div>
		
		</div>

	)
}