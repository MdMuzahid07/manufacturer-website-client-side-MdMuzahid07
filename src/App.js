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
import RequireAuth from './pages/Authentication/RequireAuth/RequireAuth';
import Purchase from './components/Purchase';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import Blogs from './pages/Blogs';
import ManageOrders from './components/Dashboard/AdminRoutes/ManageOrders';
import AddProduct from './components/Dashboard/AdminRoutes/AddProduct';
import ManageUsers from './components/Dashboard/AdminRoutes/ManageUsers';
import Payment from './components/Dashboard/Payment';
import ManageProducts from './components/Dashboard/ManageProducts';
import RequireAdmin from './pages/Authentication/RequireAdmin/RequireAdmin';




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
          <Route path="/purchase/:id" element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          } />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="myorders" element={<MyOrders />} />
            <Route path="manageorders" element={<ManageOrders />} />
            <Route path="addreview" element={<AddReview />} />
            <Route path="manageusers" element={<RequireAdmin>
              <ManageUsers />
            </RequireAdmin>} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="manageproducts" element={<ManageProducts />} />
            <Route path='payment/:Id' element={<Payment />} />
          </Route>
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </Navbar>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
