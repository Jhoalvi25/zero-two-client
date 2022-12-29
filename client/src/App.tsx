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

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  // console.log("Aqui estoy!", location)

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
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
