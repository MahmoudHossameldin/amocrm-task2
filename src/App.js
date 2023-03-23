import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DesktopBackgroundEffects from './components/DesktopBackgroundEffects';

function App() {
  return (
    <div className='App'>
      <DesktopBackgroundEffects className='desktop-bg-effects' />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
