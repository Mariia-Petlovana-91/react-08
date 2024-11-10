import css from "../UserMenu/UserMenu.module.css";
import iconSize from "../../utils/iconSize";

import { FaRegSmile } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

export default function UserMenu() {
	return (
		<div className={css.userMenu}>
			< FaRegSmile className={css.icon}
				size={iconSize.m}
			/>
			<p className={css.text}>Hello,
				<span className={css.userName}></span>
			</p>
			<button type="submit"
				className={css.btn}
			>
				<BiLogOutCircle className={css.icon}
				 size={iconSize.m}
				/>
			</button>
		</div>
	)
}