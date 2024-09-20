import cn from "classnames";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import s from "./Button.module.css";

export enum ButtonTheme {
  PRIMARY = "primary",
  ROUND = "round",
}

export enum ButtonSizes {
  XS = "size_xs",
  S = "size_s",
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSizes;
  disabled?: boolean;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSizes.M,
    disabled,
    ...otherProps
  } = props;

  const mods = { [s.disabled]: disabled };

  return (
    <button
      className={cn(s.button, className, s[theme], s[size], mods)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
