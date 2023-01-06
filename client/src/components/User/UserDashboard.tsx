import UserNav from "./UserNav";
import HeaderUser from "./HeaderUser";
import MyList from "./Options/MyList";
import User from "./Options/User";
import Plan from "./Options/Plan";
import Achievements from "./Options/Achievements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "../../style/User/UserDasboard.module.css";

export default function UserDashboard(): JSX.Element {
  return (
    <div className={style["user"]}>
      <Router>
        <UserNav></UserNav>
        <div className={style["user-content"]}>
          <HeaderUser></HeaderUser>
          <div className={style["welcome"]}>
            <h2 className={style["hola"]}>Hi Juan!</h2>
            <span className={style["question"]}>What' do we have today?</span>
          </div>

          <Switch>
            <Route exact path="/list">
              <MyList></MyList>
            </Route>
            <Route exact path="/user">
              <User></User>
            </Route>
            <Route exact path="/plan">
              <Plan></Plan>
            </Route>
            <Route exact path="/achiviements">
              <Achievements></Achievements>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
