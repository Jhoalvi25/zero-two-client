import style from "../../style/User/UserNav.module.css";
import { Link } from "react-router-dom";

export default function UserNav(): JSX.Element {
  return (
    // Nav

    <div className={style["icon-bar"]}>
      <div className={style["options"]}>
        <h2 className={style["title"]}>Options</h2>
        <Link to="/list">
          <span className={style["line"]}></span>My Lists
        </Link>

        <Link to="/user">
          <span className={style["line"]}></span>User
        </Link>

        <Link to="/plan">
          <span className={style["line"]}></span>Plan
        </Link>

        <Link to="/achiviements">
          {" "}
          <span className={style["line"]}></span>Achiviements
        </Link>
      </div>
    </div>
  );
}
