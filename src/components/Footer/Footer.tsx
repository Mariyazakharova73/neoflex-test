import { Link } from 'react-router-dom';
import lang from '../../assets/lang.svg';
import Text, { TextSize, TextTheme } from '../../components/Text/Text';
import { LINKDATA } from '../../utils/variables';
import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<Card className={s.cardWrapper}>
				<Logo />
				<div>
					<ul className={s.list}>
						{LINKDATA.slice(0, 3).map(l => {
							return (
								<li className={s.item} key={l.text}>
									<Link to={l.link} className={s.link}>
										<Text
											className={s.text}
											text={l.text}
											theme={TextTheme.DARK}
											size={TextSize.M}
										/>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					<Link to={LINKDATA[3].link} className={s.link}>
						<Text
							className={s.text}
							text={LINKDATA[3].text}
							theme={TextTheme.DARK}
							size={TextSize.M}
						/>
					</Link>
					<div className={s.language}>
						<img src={lang} alt='Смена языка.' />
						<Text theme={TextTheme.PRIMARY} size={TextSize.S} text='Рус' />
						<Text theme={TextTheme.DEFAULT} size={TextSize.S} text='Eng' />
					</div>
				</div>
        <></>
			</Card>
		</footer>
	);
};

export default Footer;
