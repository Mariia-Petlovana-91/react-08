import css from "../PrivateRoute/PrivateRoute.module.css";
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({ isLogIn, children }) {
	return (
		isLogIn ? children : <Navigate to="/login" />
	)
}

