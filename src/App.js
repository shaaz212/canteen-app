import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Details from './Components/Details';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/details' element={<Details/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
