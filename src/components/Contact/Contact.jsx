import css from '../Contact/Contact.module.css';
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import iconSize from '../../utils/iconSize';
import { useDispatch } from 'react-redux';

import {apiDeleteContact} from "../../redux/contacts/slice";

export default function Contact({ name = "Ім'я відсутнє", number = "Номер відсутній", id }) {
	const dispatch = useDispatch(); 
	
	return (
		<>
			<div>
				<h3 className={css.contact__name}>
					<GrUserManager className={css.contact__icon}
						size={iconSize.sm} />{name}
				</h3>
				<p className={css.contact__number}>
					<FaPhone className={css.contact__icon}
						size={iconSize.sm} />{number}
				</p>
			</div>
			<button className="btnIcon"
				type='button'
				onClick={() => dispatch(apiDeleteContact(id))}>
				<RiDeleteBin2Line className="iconBtn"
				 size={iconSize.m}
				/>
			</button>
		</>
	)
}