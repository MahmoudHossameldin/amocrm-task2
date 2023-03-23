import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      {/* <div className='bg-effect red-light'></div>
      <div className='bg-effect glass'></div>
      <div className='bg-effect yellow-light'></div>
      <div className='bg-effect red-ball-lg'></div>
      <div className='bg-effect red-ball-sm'></div>
      <div className='bg-effect purple-light'></div>
      <div className='bg-effect purple-ball'></div> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
