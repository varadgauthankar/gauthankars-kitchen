import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import MenuePage from "./pages/menue/";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/menue" component={MenuePage} />
      </Switch>
    </Router>
  );
}

export default App;
