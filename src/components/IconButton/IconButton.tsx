import s from './IconButton.module.css';

export interface IconButtonProps {
	count: string;
	link: string;
	title: string;
}

const IconButton = ({ count, link, title }: IconButtonProps) => {
	return (
		<button className={s.button}>
			<img className={s.image} src={link} alt={`${title}.`} />
			<div className={s.count}>{count}</div>
		</button>
	);
};

export default IconButton;
