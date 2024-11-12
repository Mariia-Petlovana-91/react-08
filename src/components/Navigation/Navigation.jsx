import css from "../AppBar/AppBar.module.css";

import onActiveClass from "../../utils/onActiveClass";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
	const selectedLoggedIn = useSelector(selectLoggedIn);
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
			{selectedLoggedIn &&<NavLink
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