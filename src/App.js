import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Project} exact />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
