import React from "react";
import NavBar from "./Navbar";
import style from "../style/Admin.module.css";
import imgd from "../img/defaultImg.jpg";
import Settings from "../img/management.png";
import SearchBarUser from "./SearchBarUser";

export default function Admin(props) {
  return (
    <div>
      <NavBar></NavBar>
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
              <img className={style["image"]} src={imgd} alt="img"></img>
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
        <SearchBarUser />
        <div className={style["user-data-container"]}>
          <div className={style["container-image-data-container"]}>
            <img
              className={style["image-data-container"]}
              src={imgd}
              alt="img"
            ></img>
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
            <img
              className={style["icon-data-container"]}
              src={Settings}
              alt="img"
            ></img>
          </div>
        </div>

        <div className={style["settings-container"]}>
          <div className={style["box-container"]}>
            <div className={style["box"]}>
              Name
              <div>
                <div class="">
                  <div className={style["box-text"]}>Nezuko-chan</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style["box-container"]}>
            <div className={style["box"]}>
              Plan
              <div>
                <div class="">
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
                <div class="">
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
                <div class="">
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
