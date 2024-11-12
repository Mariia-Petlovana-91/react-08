import css from "../AppBar/AppBar.module.css";

import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
	const selectedLoggedIn = useSelector(selectLoggedIn);
	return (
		<header className={css.header} >
			<Navigation/>
			{selectedLoggedIn ? <UserMenu/> :<AuthNav />}
		</header>
	)
}