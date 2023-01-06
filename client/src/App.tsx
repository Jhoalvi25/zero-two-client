import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import AnimeList from "./components/AnimesPage/AnimesList";
import Footer from "./components/UtilsComponents/Footer";
import AnimeDetail from "./components/AnimeDetailPage/Animedetail";
import {
  getAnimeGenres,
} from "./redux/actions/index";
import { useEffect } from "react";
import NavBar from "./components/NavBar/Navbar";
import { useAppDispatch } from "./redux/hooks";

import Profile from "./components/NavBar/Profile";
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


const App: React.FC = () =>  {
  const dispatch = useAppDispatch();


  const { isLoading } = useAuth0();
  



  useEffect(() => {
    dispatch(getAnimeGenres());
  }, [dispatch]);

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
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/payment" component={Payments} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/user" component={UserDashboard} />
          <Route path='*' component={NotFound} />
          
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
