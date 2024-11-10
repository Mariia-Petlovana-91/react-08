import css from "../Layout/Layout.module.css";
import AppBar from "../AppBar/AppBar";

export default function Layout({isLogIn,children}) {
	return (
		<div>
		    <AppBar isLogIn={isLogIn} />
		    {children}
		</div>
		
		
	)
}