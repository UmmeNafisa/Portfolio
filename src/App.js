import './App.css';
import Navbar from './Pages/Navbar-header/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Projects from './Pages/Home/Projects/Projects';
import Contacts from './Pages/Home/Contacts/Contacts';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div >

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          {/* <Route path="/" element={<Home />}> </Route> */}
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/projects" element={<Projects />}> </Route>
          <Route path="/contact" element={<Contacts />}> </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
