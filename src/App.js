import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Products from './Components/Productos/Products';
import Inscription from './Components/Inscripcion/Inscription';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Conocenos' element={<About/>} />
        <Route path='/Productos' element={<Products/>} />
        <Route path='/Inscripcion' element={<Inscription/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
