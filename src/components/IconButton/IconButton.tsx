import { Link } from "react-router-dom";
import s from "./IconButton.module.css";

export interface IconButtonProps {
  count: string;
  img: string;
  title: string;
  link: string;
}

const IconButton = ({ count, img, title, link }: IconButtonProps) => {
  return (
    <Link
      className={s.link}
      to={link}
    >
      <img
        className={s.image}
        src={img}
        alt={`${title}.`}
      />
      <div className={s.count}>
        <p>{count}</p>
      </div>
    </Link>
  );
};

export default IconButton;
