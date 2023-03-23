import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='bg-effect red-light'></div>
      <div className='bg-effect glass'></div>
      <div className='bg-effect yellow-light'></div>
      <div className='bg-effect red-ball-lg'></div>
      <div className='bg-effect red-ball-sm'></div>
      <div className='bg-effect purple-light'></div>
      <div className='bg-effect purple-ball'></div>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
