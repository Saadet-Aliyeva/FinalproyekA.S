import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//komponentler gelecek
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
function App () {
return (
  <>

 <Navbar />
 <Header />
 <AboutMe />
 <Pricing />
 <Contact />
 </>
  );
}

export default App;
