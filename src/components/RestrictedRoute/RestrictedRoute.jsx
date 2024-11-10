import css from "../RestrictedRoute/RestrictedRoute.module.css";
import { Navigate } from 'react-router-dom';
export default function RestrictedRoute({ isLogIn, children }) {
	return (
		isLogIn ? <Navigate to="/" /> : children
	)
}