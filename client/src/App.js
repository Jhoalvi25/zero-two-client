import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import { getAnimeGenres, getAnimes } from "./redux/Animes/actions";

import Footer from "./components/Footer";
import AnimeDetail from "./components/Animedetail";

function App() {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animes);
  useEffect(() => {
    dispatch(getAnimes());
    dispatch(getAnimeGenres());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/zerotwo" component={Dashboard} />
          <Route path="/animes/:id" component={AnimeDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
