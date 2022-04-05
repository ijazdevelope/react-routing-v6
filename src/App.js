import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; //Navigate for conditionally rerendring the components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Cards from './pages/Cards';
import NotFound from './pages/NotFound';
import Registration from './pages/Registration';

function App() {
  const isLogged = false
  const data = {
    navigate: 'about page is not found!'
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={isLogged ? <About /> : <Navigate to='/contact' replace state={data} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/cards/:categories/:id' element={<Cards />} /> {/* categories for dynamic url */}
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
