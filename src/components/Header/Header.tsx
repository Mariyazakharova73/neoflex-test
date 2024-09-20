import cart from "../../assets/cart.svg";
import like from "../../assets/like.svg";
import { useAppSelector } from "../../hooks/hooks";
import { selectCartProducts } from "../../services/selectors/productsSelectors";
import { RoutePath } from "../../utils/config/routeConfig";
import { getTotalCount } from "../../utils/helpers";
import IconButton from "../IconButton/IconButton";
import Logo from "../Logo/Logo";
import s from "./Header.module.css";

const Header = () => {
  const cartProducts = useAppSelector(selectCartProducts);
  return (
    <header className={s.header}>
      <Logo />
      <div className={s.iconWrapper}>
        <IconButton
          count="2"
          title="Кнопка избранное"
          img={like}
          link={"#"}
        />
        <IconButton
          count={String(getTotalCount(cartProducts))}
          title="Кнопка корзина"
          img={cart}
          link={RoutePath.cart}
        />
      </div>
    </header>
  );
};

export default Header;
