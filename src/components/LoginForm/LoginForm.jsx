import css from "../LoginForm/LoginForm.module.css";


import logInValidateSchema from "../../utils/loginValidateSchema";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch} from 'react-redux';

export default function LoginForm() {
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
			validationSchema={logInValidateSchema}>
			<Form className="form">
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