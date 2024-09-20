import { Product } from "../../types/types";
import Card from "../Card/Card";
import CardContent from "../CardContent/CardContent";
import s from "./Cards.module.css";

export interface CardsProps {
  products: Product[];
}

const Cards = ({ products }: CardsProps) => {
  return (
    <div className={s.wrapper}>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            className={s.cardWrapper}
          >
            <CardContent product={product} />
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
