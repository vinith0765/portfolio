import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Socialmedia from './components/Socialmedia';

function App() {
  return (
    <div className="App">
      <Greet />
      <AboutMe />
      <Education />
      <Skills />
      <Socialmedia />
    </div>
  );
}

export default App;
