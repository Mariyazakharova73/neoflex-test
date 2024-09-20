import cn from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";
import s from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={cn(s.card, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Card;
