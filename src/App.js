import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing/>} />


      </Routes>
    </div>
  );
}

export default App;
