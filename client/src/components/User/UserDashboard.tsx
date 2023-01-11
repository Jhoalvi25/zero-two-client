import UserNav from "./UserNav";
import HeaderUser from "./HeaderUser";
import MyList from "./Options/MyList";
import User from "./Options/User";
import Plan from "./Options/Plan";
import Achievements from "./Options/Achievements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "../../style/User/UserDasboard.module.css";
import { useCallback, useEffect, useState } from "react";
import { getUserResource, getUserResourceWithGoogle } from "../../redux/actions";
import {  UserInterface } from "../../types/types";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useAuth0 } from "@auth0/auth0-react";
import Admin from "../AdminPage/Admin";

export default function UserDashboard(): JSX.Element {
  const dispatch = useAppDispatch();
  const history = useHistory();
  // const userAccounnt = useAppSelector((state) => state.user);
  const {getAccessTokenSilently, user } = useAuth0();
  const regularToken = window.localStorage.getItem('token');

  const emailUser = user?.email ? user?.email : '';
  
  const [userLog, setUserLog] = useState<UserInterface>({} as UserInterface);
  
  const getToken = useCallback( async () => {
    const accesToken = await getAccessTokenSilently();
    
    dispatch(getUserResourceWithGoogle(accesToken, emailUser)).then(val => {
      console.log('GOOGLE', val)
      setUserLog(val)
    });
   
  },[getAccessTokenSilently, emailUser, dispatch])
  
  useEffect(() => {
   
    getToken();
    dispatch(getUserResource(regularToken ? regularToken : '')).then(val => {
      console.log('us', val)
      setUserLog(val)
    })
  }, [getToken, dispatch, regularToken]);
  console.log(userLog)


  if (!regularToken || !userLog) {
    console.log('r', regularToken, 'u', userLog)
    history.push('/login')
  }


  console.log('PROFILE', regularToken, userLog);
  return (
    <div className={style["user"]}>
      <Router>
        <UserNav {...userLog} ></UserNav>
        <div className={style["user-content"]}>
          <HeaderUser></HeaderUser>
          <div className={style["welcome"]}>
            <h2 className={style["hola"]}>Hi Juan!</h2>
            <span className={style["question"]}>What' do we have today?</span>
          </div>

          <Switch>
            <Route exact path="/profile/list">
              <MyList></MyList>
            </Route>
            <Route exact path="/profile/user">
              <User></User>
            </Route>
            <Route exact path="/profile/plan">
              <Plan></Plan>
            </Route>
            <Route exact path="/profile/achiviements">
              <Achievements></Achievements>
            </Route>
            <Route exact path="/profile/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
