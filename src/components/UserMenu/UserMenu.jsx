import css from "../UserMenu/UserMenu.module.css";
import iconSize from "../../utils/iconSize";

import { FaRegSmile } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

import { useDispatch,useSelector } from "react-redux";

import {apiLogOutUser} from "../../redux/auth/slice";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
	const dispatch = useDispatch();
	const userName = useSelector(selectUser)
	
	return (
		<div className={css.menu}>
			<div className={css.greetingBlock}>
                  < FaRegSmile className={css.icon}
				size={iconSize.m}
			/>
			<p className={css.text}>Hello,
				<span className={css.userName}>{userName.name}</span>
			</p>
			</div>

			<button type="button"
				className="btnIcon"
				onClick={()=>dispatch(apiLogOutUser())}
			>
				<BiLogOutCircle className="iconBtn"
				 size={iconSize.m}
				/>
			</button>
		</div>
	)
}