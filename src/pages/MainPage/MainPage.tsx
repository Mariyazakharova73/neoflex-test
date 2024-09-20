import Cards from "../../components/Cards/Cards";
import Text, { TextSize, TextTheme } from "../../components/Text/Text";
import { useAppSelector } from "../../hooks/hooks";
import { selectProducts } from "../../services/selectors/productsSelectors";
import s from "./MainPage.module.css";

const MainPage = () => {
  const products = useAppSelector(selectProducts);

  return (
    <main className={s.main}>
      <section>
        <Text
          title="Наушники"
          theme={TextTheme.LIGHT}
          size={TextSize.L}
          className={s.title}
        />
        <Cards products={products.slice(0, 6)} />
      </section>
      <section>
        <Text
          title="Беспроводные наушники"
          theme={TextTheme.LIGHT}
          size={TextSize.L}
          className={s.title}
        />
        <Cards products={products.slice(6, 9)} />
      </section>
    </main>
  );
};

export default MainPage;
