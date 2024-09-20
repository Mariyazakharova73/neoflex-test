import clearIcon from "../../assets/clear.svg";
import Text, { TextSize, TextTheme } from "../../components/Text/Text";
import { useAppDispatch } from "../../hooks/hooks";
import { cartActions } from "../../services/slices/cartSlice";
import { CartProduct as Product } from "../../types/types";
import Button, { ButtonSizes, ButtonTheme } from "../Button/Button";
import Card from "../Card/Card";
import s from "./CartProduct.module.css";

interface CartProductProps {
  product: Product;
}

const CartProduct = ({ product }: CartProductProps) => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(cartActions.addProduct(product));
  };

  const onClickMinus = () => {
    if (product.count === 1) {
      dispatch(cartActions.removeAll(product));
    }
    dispatch(cartActions.removeOneProduct(product));
  };

  const onClickRemoveAll = () => {
    dispatch(cartActions.removeAll(product));
  };

  return (
    <li className={s.item}>
      <Card className={s.productCard}>
        <div className={s.productInfoWrapper}>
          <div className={s.productInfo}>
            <img
              src={product.img}
              alt={`${product.title}.`}
              className={s.image}
            />
            <div className={s.textWrapper}>
              <Text
                title={product.title}
                theme={TextTheme.DEFAULT}
                size={TextSize.M}
              />
              <Text
                text={`${product.price} ₽`}
                theme={TextTheme.LIGHT}
                size={TextSize.S}
                className={s.cartPrice}
              />
            </div>
          </div>
          <Button onClick={onClickRemoveAll}>
            <img
              src={clearIcon}
              alt="Удаление товара."
            />
          </Button>
        </div>
        <div className={s.productPrice}>
          <div className={s.buttonWrapper}>
            <Button
              theme={ButtonTheme.ROUND}
              size={ButtonSizes.L}
              onClick={() => onClickMinus()}
            >
              -
            </Button>
            <Text
              text={String(product.count)}
              theme={TextTheme.DARK}
              size={TextSize.M}
            />
            <Button
              theme={ButtonTheme.ROUND}
              size={ButtonSizes.L}
              onClick={onClickPlus}
            >
              +
            </Button>
          </div>
          <Text
            text={`${product.price * product.count} ₽`}
            theme={TextTheme.DEFAULT}
            size={TextSize.S}
          />
        </div>
      </Card>
    </li>
  );
};

export default CartProduct;
