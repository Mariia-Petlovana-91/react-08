import css from "../Layout/Layout.module.css";
import AppBar from "../AppBar/AppBar";

export default function Layout({children}) {
	return (
		<div>
		    <AppBar/>
		    {children}
		</div>
		
		
	)
}