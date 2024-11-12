import css from "../RestrictedRoute/RestrictedRoute.module.css";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
export default function RestrictedRoute({ component, redirectTo = "/contacts" }) {
	const selectedLoggedIn = (useSelector(selectLoggedIn));
	return (
		selectedLoggedIn ?  <Navigate to={redirectTo} replace />: component 
	)
}