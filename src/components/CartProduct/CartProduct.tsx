import clearIcon from '../../assets/clear.svg';
import Image from '../../assets/products/1.jpg';
import Text, { TextSize, TextTheme } from '../../components/Text/Text';
import Button, { ButtonSizes, ButtonTheme } from '../Button/Button';
import Card from '../Card/Card';
import s from './CartProduct.module.css';

const CartProduct = () => {
	return (
		<li className={s.item}>
			<Card className={s.productCard}>
				<div className={s.productInfoWrapper}>
					<div className={s.productInfo}>
						<img src={Image} alt='Продукт.' className={s.image} />
						<div className={s.textWrapper}>
							<Text
								title='Apple BYZ S852I'
								theme={TextTheme.DEFAULT}
								size={TextSize.M}
							/>
							<Text
								text='2 927 ₽'
								theme={TextTheme.LIGHT}
								size={TextSize.S}
								className={s.cartPrice}
							/>
						</div>
					</div>
					<Button>
						<img src={clearIcon} alt='Удаление товара.' />
					</Button>
				</div>
				<div className={s.productPrice}>
					<div className={s.buttonWrapper}>
						<Button theme={ButtonTheme.ROUND} size={ButtonSizes.L}>
							-
						</Button>
						<Text text='1' theme={TextTheme.DARK} size={TextSize.M} />
						<Button theme={ButtonTheme.ROUND} size={ButtonSizes.L}>
							+
						</Button>
					</div>
					<Text text='2 927 ₽' theme={TextTheme.DEFAULT} size={TextSize.S} />
				</div>
			</Card>
		</li>
	);
};

export default CartProduct;
