import { Link } from "react-router-dom";
import { RoutePath } from "../../utils/config/routeConfig";
import Text, { TextSize } from "../Text/Text";

import s from "./Logo.module.css";

const Logo = () => {
  return (
    <Link
      to={RoutePath.main}
      className={s.link}
    >
      <Text
        text="QPICK"
        className={s.logo}
        size={TextSize.XL}
      />
    </Link>
  );
};

export default Logo;
