import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import AnimeList from "./components/AnimesPage/AnimesList";
import Footer from "./components/UtilsComponents/Footer";
import AnimeDetail from "./components/AnimeDetailPage/Animedetail";
import {
  getAnimeGenres, getUserResource, getUserResourceWithGoogle,
} from "./redux/actions/index";
import { useEffect, useCallback } from "react";
import NavBar from "./components/NavBar/Navbar";
import { useAppDispatch } from "./redux/hooks";

// import Profile from "./components/NavBar/Profile";
import Admin from "./components/AdminPage/Admin";
// import { ProtectedRoute } from "./components/NavBar/Protected-route";
import { useAuth0 } from "@auth0/auth0-react";
import NotFound from "./components/UtilsComponents/NotFound";

import Payments from "./components/Payments/Payments";
import Login from "./components/Login_and_Register/Login";
import Register from "./components/Login_and_Register/Register";
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";
import Loading from "./components/UtilsComponents/Footer";
import UserDashboard from "./components/User/UserDashboard";
import MyList from "./components/User/Options/MyList";
import ListDetail from "./components/User/Options/ListDetail";
import User from "./components/User/Options/User";

import Achievements from "./components/User/Options/Achievements";


const App: React.FC = () =>  {
  const dispatch = useAppDispatch();

  const { isLoading, getAccessTokenSilently, user } = useAuth0();
  // const regularToken = window.localStorage.getItem('token');
  const emailUser = user?.email ? user?.email : '';

  const getRegularToken = useCallback(async () => {
    return window.localStorage.getItem('token')  
  }, [])

  const getToken = useCallback( async () => {
    const accesToken = await getAccessTokenSilently();
    await dispatch(getUserResourceWithGoogle(accesToken, emailUser));
  },[getAccessTokenSilently, emailUser, dispatch])
    
  const getUserInfo = useCallback(async () => {
    const regTok = await getRegularToken();
    await dispatch(getUserResource(regTok ? regTok : ''));
  }, [dispatch, getRegularToken]);


  useEffect(() => {
    dispatch(getAnimeGenres());
    getToken();
    getUserInfo();
    getRegularToken();
  }, [getRegularToken, getUserInfo, getToken, dispatch]);



  if (isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <BrowserRouter>
      <div className="App">
        {/* {location.pathname === "/" ? (
          <NavBar bgColor="transparent" underline={true} />
        ) : ( */}
          <NavBar />
        {/* )} */}

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route path={["/animes/:option", "/animes"]} component={AnimeList} />
          <Route exact path="/watch/:idAnime" component={AnimeDetail} />
          <Route exact path="/watch/:idAnime/:idEpisode" component={EpisodeDetails} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/admin" component={Admin} />
          <Route exact path="/payment" component={Payments} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          
          <Route exact path={["/profile", "/profile/:options"]} component={UserDashboard} />

          <Route exact path="/profile/list" component={MyList} />
          <Route exact path="/profile/list/:id" component={ListDetail} />
          <Route exact path="/profile/user" component={User} />

          <Route exact path="/profile/achiviements" component={Achievements} />
          <Route exact path="/profile/admin" component={Admin} />

          <Route path='*' component={NotFound} />
          
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
