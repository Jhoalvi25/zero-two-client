import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import AnimeDetail from "./components/Animedetail";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAnimes,
  getAnimeGenres,
  getAnimeNewest,
  getAnimes,
} from "./redux/Animes/actions";
import { useEffect } from "react";
import NavBar from "../src/components/Navbar";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimes());
    dispatch(getAnimeGenres());
    dispatch(getAllAnimes());
    dispatch(getAnimeNewest());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/animes" component={Dashboard} />
          <Route path="/animes/:id" component={AnimeDetail} />
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
