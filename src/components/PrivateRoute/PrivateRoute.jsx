import css from "../PrivateRoute/PrivateRoute.module.css";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
export default function PrivateRoute({ component, redirectTo = "/login" }) {
	const selectedLoggedIn = (useSelector(selectLoggedIn));
	return (
		selectedLoggedIn ? component : <Navigate to={redirectTo} replace />
	)
}

