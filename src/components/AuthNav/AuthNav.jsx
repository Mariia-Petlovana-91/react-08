import css from "../AppBar/AppBar.module.css";

import onActiveClass from "../../utils/onActiveClass";

import { NavLink } from "react-router-dom";

export default function AuthNav() {
	return (
		<div className={css.authLink}>
                  <NavLink
		       to="/login"
		       className={({ isActive }) => 
				 onActiveClass(isActive, css.link, css.active)
			 }
			>
				LogIn
			</NavLink>
			<NavLink
		       to="/register"
		       className={({ isActive }) => 
				 onActiveClass(isActive, css.link, css.active)
			 }
			>
				SingUp
			</NavLink>
		</div>
	)
	
}