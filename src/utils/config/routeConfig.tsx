import { RouteProps } from "react-router-dom";
import CartPage from "../../pages/CartPage/CartPage";
import MainPage from "../../pages/MainPage/MainPage";

export enum AppRoutes {
  MAIN = "main",
  CART = "cart",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <div>Страница не найдена</div>,
  },
};
