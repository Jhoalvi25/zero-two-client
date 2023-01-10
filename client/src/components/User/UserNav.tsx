import style from "../../style/User/UserNav.module.css";
import { Link } from "react-router-dom";
import { UserInterface } from "../../types/types";

export default function UserNav(userLog?: UserInterface) {
  return (
    // Nav

    <div className={style["icon-bar"]}>
      <div className={style["options"]}>
        <h2 className={style["title"]}>Options</h2>
        <Link to="/profile/list">
          <span className={style["line"]}></span>My Lists
        </Link>

        <Link to="/profile/user">
          <span className={style["line"]}></span>User
        </Link>

        <Link to="/profile/plan">
          <span className={style["line"]}></span>Plan
        </Link>

        <Link to="/profile/achiviements">
          {" "}
          <span className={style["line"]}></span>Achiviements
        </Link>
        {userLog?.rol === "Admin" && 
        <Link to="/profile/admin">
        {" "}
        <span className={style["line"]}></span>Admin
      </Link>
      }
      </div>
    </div>
  );
}
