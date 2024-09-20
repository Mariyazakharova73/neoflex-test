import cn from "classnames";
import { FC } from "react";
import s from "./Text.module.css";

export enum TextTheme {
  PRIMARY = "primary",
  PRIMARY_LIGHT = "primaryLight",
  LIGHT = "light",
  DARK = "dark",
  DEFAULT = "default",
  WHITE = "white",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  XS = "size_s",
  S = "size_s",
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  Tag?: HeaderTagType;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5";

const Text: FC<TextProps> = (props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.DEFAULT,
    align = TextAlign.LEFT,
    size = TextSize.M,
    Tag = "h2",
  } = props;

  return (
    <div className={cn(s.Text, className, s[theme], s[align], s[size])}>
      {title && <Tag className={s.title}>{title}</Tag>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
};

export default Text;
