import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Header/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import SignUp from './pages/Authentication/SignIn/SingUp';
import Login from './pages/Authentication/Login/Login';
import ErrorPage from './pages/ErrorPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




AOS.init();

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Navbar>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
