import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
