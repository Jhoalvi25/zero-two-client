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
// import { useHistory } from "react-router-dom";


const App: React.FC = () =>  {
  const dispatch = useAppDispatch();
  // const history = useHistory();

  const { isLoading, getAccessTokenSilently, user } = useAuth0();
  const regularToken = window.localStorage.getItem('token');
  const emailUser = user?.email ? user?.email : '';

  const getToken = useCallback( async () => {
    const accesToken = await getAccessTokenSilently();
    
    dispatch(getUserResourceWithGoogle(accesToken, emailUser))
    // .then(val => {
    //   console.log('GOOGLE', val)
    //   setUserLog(val)
    // });
   
  },[getAccessTokenSilently, emailUser, dispatch])

  useEffect(() => {
    dispatch(getAnimeGenres());
    getToken();
    dispatch(getUserResource(regularToken ? regularToken : ''))
    // .then(val => {
    //   console.log('us', val)
    //   setUserLog(val)
    // })
  }, [getToken, dispatch, regularToken]);

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
          <Route exact path="/profile" component={UserDashboard} />
          <Route path='*' component={NotFound} />
          
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
