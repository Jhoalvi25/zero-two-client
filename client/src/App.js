import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
// import Footer from "./components/Footer";
import AnimeDetail from "./components/Animedetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/animes" component={Dashboard} />
          <Route path="/animes/:id" component={AnimeDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
