import { Routes, Route } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Store from './pages/Store';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
