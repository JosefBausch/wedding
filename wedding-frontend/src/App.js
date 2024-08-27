import './assets/scss/fonts.scss';
import './assets/scss/base.scss';
import './assets/fontawesome/css/all.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Registry from "./pages/Registry/Registry";
import Rsvp from "./pages/Rsvp/Rsvp";
import Photos from "./pages/Photos/Photos";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="registry" element={<Registry />} />
          <Route path="rsvp" element={<Rsvp />} />
          <Route path="photos" element={<Photos />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
