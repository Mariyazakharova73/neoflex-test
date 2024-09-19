import Img1 from "../assets/products/1.jpg";
import Img2 from "../assets/products/2.jpg";
import Img3 from "../assets/products/3.jpg";
import Img7 from "../assets/products/7.jpg";
import Img8 from "../assets/products/8.jpg";
import Img9 from "../assets/products/9.jpg";
import tgIcon from "../assets/telegram.svg";
import vkIcon from "../assets/vk.svg";
import whatsAppIcon from "../assets/whatsapp.svg";
import { Product } from "../types/types";
import { RoutePath } from "./config/routeConfig";

export const PRODUCTS: Product[] = [
  {
    id: "0",
    img: Img1,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: "1",
    img: Img2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: "2",
    img: Img3,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: "3",
    img: Img1,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: "4",
    img: Img2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: "5",
    img: Img3,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: "6",
    img: Img7,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    id: "7",
    img: Img8,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    id: "8",
    img: Img9,
    title: "GERLAX GH-04",
    price: 7527,
    rate: 4.7,
  },
];

export const LinksData = [
  { text: "Избранное", link: "#" },
  { text: "Корзина", link: RoutePath.cart },
  { text: "Контакты", link: "#" },
  { text: "Условия сервиса", link: "#" },
];

export const socialLinks = [
  { name: "Вконтакте.", img: vkIcon, link: "https://vk.com/" },
  { name: "WhatsApp.", img: whatsAppIcon, link: "https://web.whatsapp.com/" },
  { name: "Телеграм.", img: tgIcon, link: "https://web.telegram.org/" },
];
