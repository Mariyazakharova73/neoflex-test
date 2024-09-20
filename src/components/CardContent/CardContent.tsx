import star from "../../assets/star.png";
import Text, { TextSize, TextTheme } from "../../components/Text/Text";
import { useAppDispatch } from "../../hooks/hooks";
import { cartActions } from "../../services/slices/cartSlice";
import { Product } from "../../types/types";
import Button, { ButtonSizes, ButtonTheme } from "../Button/Button";
import s from "./CardContent.module.css";

export interface CardContentProps {
  product: Product;
}

const CardContent = ({ product }: CardContentProps) => {
  const dispatch = useAppDispatch();

  const onClickBuy = () => {
    dispatch(cartActions.addProduct(product));
  };

  return (
    <div className={s.cardContent}>
      <div className={s.imageWrapper}>
        <img
          className={s.image}
          src={product.img}
          alt={`${product.title}.`}
        />
      </div>
      <div className={s.info}>
        <div className={s.titleWrapper}>
          <Text
            title={product.title}
            Tag="h2"
            size={TextSize.M}
            theme={TextTheme.DEFAULT}
          />
          <Text
            text={`${product.price} ₽`}
            size={TextSize.M}
            theme={TextTheme.PRIMARY}
          />
          {product.id === "0" && (
            <Text
              className={s.sale}
              text={`3527 ₽`}
              size={TextSize.XS}
              theme={TextTheme.PRIMARY_LIGHT}
            />
          )}
        </div>
        <div className={s.textWrapper}>
          <div className={s.rate}>
            <img
              src={star}
              alt="Рейтинг."
            />
            <Text
              text={String(product.rate)}
              size={TextSize.M}
              theme={TextTheme.LIGHT}
            />
          </div>
          <Button
            theme={ButtonTheme.PRIMARY}
            size={ButtonSizes.M}
            onClick={onClickBuy}
          >
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
