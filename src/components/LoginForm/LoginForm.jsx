import css from "../LoginForm/LoginForm.module.css";
import clsx from "clsx";

import logInValidateSchema from "../../utils/loginValidateSchema";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import apiModule from "../../redux/auth/slice";

export default function LoginForm() {
	const dispatch = useDispatch();

	function onSubmit(data, actions) {
		dispatch(apiModule.apiLoginUser(data));
		actions.resetForm();
		return;
	}

	const INITIAL__VALUE = {
		name: "",
		email: "",
	      password: ""
	}

	return (
		<div className={clsx('container', 'block')}>
		<img src="/img/login.jpg" alt="login photo" />
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
					<ErrorMessage className="error"
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
					<ErrorMessage className="error"
						name='password'
						component="span" />
				</label>
                        <button className='btn' type="submit">Log In</button>
			</Form>
		</Formik>
		</div>

	)
}