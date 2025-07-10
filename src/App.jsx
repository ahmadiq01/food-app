import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import Home from './pages/Home/Home';
import ShowOrders from './pages/ShowOrders/ShowOrders';
import Header from './pages/components/Header/Header';
import Footer from './Pages/components/Footer/Footer';
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<ShowOrders />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
