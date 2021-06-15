import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Project} exact/>
        <Route path='/contact' component={Contact} />
      </Router>
    </div>
  );
}

export default App;
