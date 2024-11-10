import css from "../AppBar/AppBar.module.css";

import onActiveClass from "../../utils/onActiveClass";

import { NavLink } from "react-router-dom";

export default function Navigation({ isLogIn }) {
	return (
		<div className={css.nav}>
                  <NavLink
		       to="/"
		       className={({ isActive }) => 
				 onActiveClass(isActive, css.link, css.active)
			 }
			>
				Home
			</NavLink>
			{isLogIn &&<NavLink
		       to="/contacts"
		       className={({ isActive }) => 
				 onActiveClass(isActive, css.link, css.active)
			 }
			>
				Contacts
			</NavLink>}
			
		</div>
	)
	
}