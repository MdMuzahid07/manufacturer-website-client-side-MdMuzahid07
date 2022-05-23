import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './pages/Contact';


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
    </div>
  );
}

export default App;
