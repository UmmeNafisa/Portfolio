import './App.css';
import Navbar from './Pages/Navbar-header/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Pages/Home/About/About';
import Projects from './Pages/Home/Projects/Projects';
import Contacts from './Pages/Home/Contacts/Contacts';
import Footer from './Pages/Footer/Footer';
import Skills from './Pages/Home/Skills/Skills';

function App() {
  return (
    <div >

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
          <Route path="/home" >  <Navbar /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/projects" > <Projects /> </Route>
          <Route path="/skills" > <Skills /> </Route>
          <Route path="/contact" > <Contacts /> </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
