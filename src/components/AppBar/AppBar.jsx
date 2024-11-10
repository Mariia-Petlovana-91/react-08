import css from "../AppBar/AppBar.module.css";

import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar({ isLogIn }) {
	return (
		<header className={css.header} >
			<Navigation isLogIn={isLogIn} />
			{isLogIn? <UserMenu/> :<AuthNav />}
		</header>
	)
}