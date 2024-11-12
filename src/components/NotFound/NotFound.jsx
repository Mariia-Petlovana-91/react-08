import css from '../NotFound/NotFound.module.css';

export default function NotFound({string}) {
	return (
		<div className={css.container}>
			<p className={css.text}>{string}🤷‍♂️</p>
		</div>
	)
}