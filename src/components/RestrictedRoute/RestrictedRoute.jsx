import css from "../RestrictedRoute/RestrictedRoute.module.css";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
export default function RestrictedRoute({ component, redirectTo = "/" }) {
	const selectedLoggedIn = (useSelector(selectLoggedIn));
	 console.log('RestrictedRoute: selectedLoggedIn', selectedLoggedIn);
	return (
		selectedLoggedIn ?  <Navigate to={redirectTo} replace />: component 
	)
}