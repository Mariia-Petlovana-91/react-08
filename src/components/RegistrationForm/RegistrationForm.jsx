import css from '../RegistrationForm/RegistrationForm.module.css';
import registrationValidateSchema from "../../utils/registrationValidateSchema";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch} from 'react-redux';

export default function RegistrationForm() {
	const dispatch = useDispatch();

	function onSubmit(data, actions) {
		actions.resetForm();
		return;
	}

	const INITIAL__VALUE = {
		name: "",
		email: "",
	      password: ""
	}

	return (
		<Formik initialValues={INITIAL__VALUE}
			onSubmit={onSubmit}
			validationSchema={registrationValidateSchema}>
			<Form className="form">
				<label className="label">
					<Field className="input"
						type='text'
						name='name'
						placeholder=" "
					/>
					<span className="descript">Name</span>
					<ErrorMessage className={css.error}
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
					/>
					<span className="descript">Email</span>
					<ErrorMessage className={css.error}
						name='email'
						component="span" />
				</label>
				<label className="label">
					<Field className="input"
						type='password'
						name='password'
						placeholder=" "
					/>
					<span className="descript">Password</span>
					<ErrorMessage className={css.error}
						name='password'
						component="span" />
				</label>
                        <button className='btn' type="submit">Sing Up</button>
			</Form>

		</Formik>
	)
}