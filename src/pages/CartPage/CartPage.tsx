import Button, { ButtonSizes } from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import CartProduct from '../../components/CartProduct/CartProduct';
import Text, { TextSize, TextTheme } from '../../components/Text/Text';
import s from './CartPage.module.css';

const CartPage = () => {
	return (
		<main className={s.main}>
			<section>
				<Text
					title='Корзина'
					theme={TextTheme.DEFAULT}
					size={TextSize.L}
					className={s.title}
				/>
				<ul className={s.list}>
					<CartProduct />
				</ul>
			</section>
			<section className={s.sumWrapper}>
				<Card className={s.sumCard}>
					<div className={s.sum}>
						<Text text='ИТОГО' theme={TextTheme.DARK} size={TextSize.S} />
						<Text text={`₽ 2 927`} theme={TextTheme.DARK} size={TextSize.S} />
					</div>
					<Button className={s.button} size={ButtonSizes.M}>Перейти к оформлению</Button>
				</Card>
			</section>
		</main>
	);
};

export default CartPage;
