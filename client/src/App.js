import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
// import Footer from "./components/Footer";
import AnimeDetail from "./components/Animedetail";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeGenres, getAnimes } from "./redux/Animes/actions";
import { useEffect } from "react";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimes());
    dispatch(getAnimeGenres());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/animes" component={Dashboard} />
          <Route path="/animes/:id" component={AnimeDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
