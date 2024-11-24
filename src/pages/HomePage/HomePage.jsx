import css from "../HomePage/HomePage.module.css";
import clsx from "clsx";

import iconSize from "../../utils/iconSize";
import { FaPhone } from "react-icons/fa";
import { SiBasicattentiontoken } from "react-icons/si";

import Section from "../../components/Section/Section";

export default function HomePage () {
	return (
		<>
			<Section>
				<div className={clsx('block', css.block)}>
					<h1 className={css.title}>
					     <span className={css.titleLetter}>Ph</span>one
						<span className={css.titleLetterB}>B</span>ook
						<FaPhone
							className={css.icon}
						      size={iconSize.m}
					      />
					</h1>
					<div >
						<div className={clsx('container', css.containerHero)}>
                                     <p className={css.textHero}>
						 Web application
					       for saving and managing contacts.
						 Users can add, edit, delete and
						 search contacts in a user-friendly interface.
						</p>
						<img className={css.img} width="100%" height="100%" src="/img/phone.jpg" alt="phone photo" />
						</div>
					       <ul className={css.descriptList}>
							<li className={css.descriptItem}>	
								<h2 className={css.descriptTitle}>
									<SiBasicattentiontoken 
									   className={css.descriptIcon}
									   size={iconSize.sm}
									/>
									<span>Basic functions:</span>
								</h2>
								<ul className={css.list}>
									<li className={css.item}>
										<p className={css.text}>
											User registration and
										      authorization:
											ensures the privacy of each users contacts.
										</p>
										
									</li>
									<li className={css.item}>
										<p className={css.text}>
											Adding contacts: ability
											to store name and
											phone number information.
										</p>
										
									</li>
									<li className={css.item}>
										<p className={css.text}>
											Edit and delete: manage
										      contacts with the ability
										      to quickly edit or delete.
										</p>
										
									</li>
									<li className={css.item}>
										<p className={css.text}>
											Search by Name:
										      Quickly search for
											contacts by keyword.
										</p>
										
									</li>
								</ul>
							</li>
							<li className={css.descriptItem}>	
								<h2 className={css.descriptTitle}>
									<SiBasicattentiontoken 
									   className={css.descriptIcon}
									   size={iconSize.sm}
									/>
									<span>Advantages:</span>	
								</h2>
								<ul className={css.list}>
									<li className={css.item}>
										<p className={css.text}>
											Simple interface and ease of use.
										</p>	
									</li>
									<li className={css.item}>
										<p className={css.text}>
											Reliable data protection and privacy for each user.
										</p>	
									</li>
									<li className={css.item}>
										<p className={css.text}>
											Instant access to contacts from any device connected to the Internet.
										</p>
									</li>
								</ul>
							</li>
					       </ul>
						
						
					</div>
				</div>
			</Section>
			
		</>
	)
}