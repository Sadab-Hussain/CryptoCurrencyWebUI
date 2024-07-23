import './App.css';
import './css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ServicesPage from './Pages/ServicesPage';
import WhyUsPage from './Pages/WhyUsPage';
import TeamPage from './Pages/TeamPage';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' index element={<HomePage />} />
          <Route path='/home' index element={<HomePage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/whyus' element={<WhyUsPage />} />
          <Route path='/ourteam' element={<TeamPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
