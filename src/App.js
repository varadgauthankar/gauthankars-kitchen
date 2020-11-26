import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import MenuePage from "./pages/menue/";
import Direction from "./components/Direction";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/menue" component={MenuePage} exact />
        <Route path="/direction" component={Direction} exact/>
      </Switch>
    </Router>
  );
}

export default App;
