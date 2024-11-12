import css from "../UserMenu/UserMenu.module.css";
import iconSize from "../../utils/iconSize";

import { FaRegSmile } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

import { useDispatch } from "react-redux";

import apiModule from "../../redux/auth/slice";

export default function UserMenu() {
	const dispatch = useDispatch();
	
	return (
		<div className={css.userMenu}>
			< FaRegSmile className={css.icon}
				size={iconSize.m}
			/>
			<p className={css.text}>Hello,
				<span className={css.userName}></span>
			</p>
			<button type="button"
				className={css.btn}
				onClick={()=>dispatch(apiModule.apiLogOutUser())}
			>
				<BiLogOutCircle className={css.icon}
				 size={iconSize.m}
				/>
			</button>
		</div>
	)
}