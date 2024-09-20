import Button, { ButtonSizes } from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import CartProduct from "../../components/CartProduct/CartProduct";
import Text, { TextSize, TextTheme } from "../../components/Text/Text";
import { useAppSelector } from "../../hooks/hooks";
import { selectCartProducts } from "../../services/selectors/productsSelectors";
import { getTotalPrice } from "../../utils/helpers";
import s from "./CartPage.module.css";

const CartPage = () => {
  const cartProducts = useAppSelector(selectCartProducts);
  return (
    <main className={s.main}>
      {cartProducts.length === 0 ? (
        <Text
          theme={TextTheme.DEFAULT}
          size={TextSize.XL}
          text="Корзина пуста"
        />
      ) : (
        <>
          <section>
            <Text
              title="Корзина"
              theme={TextTheme.DEFAULT}
              size={TextSize.L}
              className={s.title}
            />
            <ul className={s.list}>
              {cartProducts.map((p) => {
                return (
                  <CartProduct
                    key={p.id}
                    product={p}
                  />
                );
              })}
            </ul>
          </section>
          <section className={s.sumWrapper}>
            <Card className={s.sumCard}>
              <div className={s.sum}>
                <Text
                  text="ИТОГО"
                  theme={TextTheme.DARK}
                  size={TextSize.S}
                />
                <Text
                  text={`${getTotalPrice(cartProducts)} ₽`}
                  theme={TextTheme.DARK}
                  size={TextSize.S}
                />
              </div>
              <Button
                className={s.button}
                size={ButtonSizes.M}
              >
                Перейти к оформлению
              </Button>
            </Card>
          </section>
        </>
      )}
    </main>
  );
};

export default CartPage;
