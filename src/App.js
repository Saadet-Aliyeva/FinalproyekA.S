import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//komponentler gelecek
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
function App () {
return (
  <>

 <Navbar />
 <Header />
 <AboutMe />
 </>
  );
}

export default App;
