import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Header/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';



AOS.init();

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;
