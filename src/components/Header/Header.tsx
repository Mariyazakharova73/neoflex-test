import cart from '../../assets/cart.svg';
import like from '../../assets/like.svg';
import { RoutePath } from '../../utils/config/routeConfig';
import IconButton from '../IconButton/IconButton';
import Logo from '../Logo/Logo';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<Logo />
			<div className={s.iconWrapper}>
				<IconButton count={'2'} title='Кнопка избранное' img={like} link={'#'}/>
				<IconButton count={'1'} title='Кнопка корзина' img={cart} link={RoutePath.cart}/>
			</div>
		</header>
	);
};

export default Header;
