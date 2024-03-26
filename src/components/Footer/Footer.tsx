import cn from 'classnames';
import { Link } from 'react-router-dom';
import tgIcon from '../../assets/Telegram.svg';
import vkIcon from '../../assets/VK.svg';
import whatsAppIcon from '../../assets/Whatsapp.svg';
import lang from '../../assets/lang.svg';
import Text, { TextSize, TextTheme } from '../../components/Text/Text';
import { LINKDATA } from '../../utils/variables';
import Button, { ButtonSizes, ButtonTheme } from '../Button/Button';
import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';

const socialLinks = [
	{ name: 'Вконтакте.', img: vkIcon, link: 'https://vk.com/' },
	{ name: 'WhatsApp.', img: whatsAppIcon, link: 'https://web.whatsapp.com/' },
	{ name: 'Телеграм.', img: tgIcon, link: 'https://web.telegram.org/' },
];

const Footer = () => {
	return (
		<footer className={s.footer}>
			<Card className={s.cardWrapper}>
				<div className={s.logo}>
					<Logo />
				</div>

				<div className={s.navWrapper}>
					<ul className={s.list}>
						{LINKDATA.map(l => {
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
						<div className={s.language}>
							<img src={lang} alt='Смена языка.' />
							<Button
								className={cn(s.button, s.activeButton)}
								theme={ButtonTheme.CLEAR}
								size={ButtonSizes.S}
							>
								Рус
							</Button>
							<Button
								className={s.button}
								theme={ButtonTheme.CLEAR}
								size={ButtonSizes.S}
							>
								Eng
							</Button>
						</div>
					</ul>
				</div>

				<ul className={s.socialLinks}>
					{socialLinks.map(l => {
						return (
							<li key={l.name} className={s.socialLink}>
								<Link to={l.link} target='_blank'>
									<img src={l.img} alt={l.name} />
								</Link>
							</li>
						);
					})}
				</ul>
			</Card>
		</footer>
	);
};

export default Footer;
