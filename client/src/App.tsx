import "./App.css";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import AnimeList from "./components/AnimesList";
import Footer from "./components/Footer";
import AnimeDetail from "./components/Animedetail";
import {
  getAnimes,
  getAnimeGenres,
  getAnimeNewest,
  getAllAnimes,
} from "./redux/actions/index";
import { useEffect } from "react";
import NavBar from "./components/Navbar";
import { useAppDispatch } from "./redux/hooks";
import Payments from "./components/Payments/Payments";
import Login from "./components/Login_and_Register/Login";
import Register from "./components/Login_and_Register/Register";

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAnimeGenres());
  }, [dispatch]);

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
          <Route exact path="/payment" component={Payments} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
