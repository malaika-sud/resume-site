import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Bottom } from "./components/Bottom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Education/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Bottom/>
    </div>
  );
}

export default App;
