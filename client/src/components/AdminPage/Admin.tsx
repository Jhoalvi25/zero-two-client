
import style from "../../style/AdminPage/Admin.module.css";
import SearchUser from "./SearchUser";
import { User } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faGears} from "@fortawesome/free-solid-svg-icons";

export default function Admin(props:User): JSX.Element {
  return (
    <div>
      <div className={style["nav-admin"]}>
        <h1 className={style["text-user"]}>Welcome again </h1>
        <div className={style["user-box"]}>
          <div className={style["card"]}>
            {props.image ? (
              <img
                className={style["image"]}
                src={`${props.image}`}
                alt="img"
              />
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            )}
            <div className={style["text-container"]}>
              <div className={style["text"]}>
                <span>Name: Juan</span>
              </div>
              <div className={style["text"]}>
                <span>Role: Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style["container-one"]}>
        <h2 className={style["h2"]}>User management</h2>
        <SearchUser />
        <div className={style["user-data-container"]}>
          <div className={style["container-image-data-container"]}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className={style["sub-container-data-container"]}>
            <div className={style["content-data-container"]}>
              <span className={style["title-data-container"]}>Name</span>
              <span className={style["text-data-container"]}>Nezuko chan</span>
            </div>
            <div className={style["content-data-container"]}>
              <span className={style["title-data-container"]}>Plan</span>
              <span className={style["text-data-container"]}>Premium</span>
            </div>
            <div className={style["content-data-container"]}>
              <span className={style["title-data-container"]}>Role</span>
              <span className={style["text-data-container"]}>User</span>
            </div>
            <div className={style["content-data-container"]}>
              <span className={style["title-data-container"]}>Status</span>
              <span className={style["text-data-container"]}>Active</span>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faGears} />
          </div>
        </div>

        <div className={style["settings-container"]}>
          <div className={style["box-container"]}>
            <div className={style["box"]}>
              Name
              <div>
                <div >
                  <div className={style["box-text"]}>Nezuko-chan</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style["box-container"]}>
            <div className={style["box"]}>
              Plan
              <div>
                <div >
                  <select className="">
                    <option value="premium">Premium</option>
                    <option value="standar">Standar</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={style["box-container"]}>
            <div className={style["box"]}>
              Role
              <div>
                <div >
                  <select className="">
                    <option value="User">User</option>
                    <option value="editor">Editor</option>
                    <option value="standar">Moderator</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={style["box-container"]}>
            <div className={style["box"]}>
              Status
              <div>
                <div >
                  <select className="">
                    <option value="Active">Active</option>
                    <option value="Unactive">Unactive</option>
                    <option value="Ban">Ban</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}