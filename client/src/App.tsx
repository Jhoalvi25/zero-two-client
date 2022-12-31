import "./App.css";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import AnimeList from "./components/AnimesList";
import Footer from "./components/Footer";
import AnimeDetail from "./components/Animedetail";
import {
  getAnimeGenres,
} from "./redux/actions/index";
import { useEffect } from "react";
import NavBar from "./components/NavBar/Navbar";
import { useAppDispatch } from "./redux/hooks";
import Profile from "./components/NavBar/Profile";
import Admin from "./components/NavBar/Admin";
import { ProtectedRoute } from "./components/NavBar/Protected-route";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/NavBar/LoginPage";
import NotFound from "./components/NotFound";

const App: React.FC = () =>  {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isLoading } = useAuth0();
  
  useEffect(() => {
    dispatch(getAnimeGenres());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>LOADING...............</h1>
      </div>
    )
  }
  return (
    <BrowserRouter>
      <div className="App">
        {location.pathname === "/" ? (
          <NavBar bgColor="transparent" underline={true} />
        ) : (
          <NavBar />
        )}

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/animes" component={AnimeList} />
          <Route exact path="/animes/:id" component={AnimeDetail} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/admin" component={Admin} />
          <Route exact path='/login' component={LoginPage} />
          <Route path='*' component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
