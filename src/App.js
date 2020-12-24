import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import MenuePage from "./pages/menue/";
import Direction from "./pages/Direction";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/menu" component={MenuePage} exact />
        <Route path="/direction" component={Direction} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
