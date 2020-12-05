import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import MenuePage from "./pages/menue/";
import Direction from "./components/Direction";
import FormSubmitted from "./pages/FormSubmitted";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/menue" component={MenuePage} exact />
        <Route path="/direction" component={Direction} exact />
        <Route path="/form-submitted" component={FormSubmitted} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
