import css from '../NotFoundPage/NotFoundPage.module.css';
import { FaReact } from "react-icons/fa";

export default function NotFoundPage() {
	return (
		<div className={css.notFoundContainer}>
			<p className={css.notFoundText}>Error&#8201;
				<strong><span className={css.notFoundTextStrong}>404</span></strong>
				&#8201;page not found!
			</p>
			<FaReact className={css.notFoundIcon} size={56} />
			
		</div>
	)
}