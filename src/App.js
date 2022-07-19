
import './App.css';

import Navbar from './Navbar/Navbar';
import {Routes,Route}from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Login from './Login/Login';
import Movies from './Movies/Movies';
import Network from './Network/Network';
import People from './People/People';
import Register from './Register/Register';
import Tvshow from './Tvshow/Tvshow';
import Notfound from './Notfound/Notfound';
function App() {
  return(<>
  <Navbar/>
  
  <Routes>
  <Route path='/' element={<Register/>}/>
    <Route path='Home' element={<Home/>} />
    <Route path='About' element={<About/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Movies' element={<Movies/>}/>
    <Route path='Network' element={<Network/>}/>
    <Route path='People' element={<People/>}/>
    <Route path='Register' element={<Register/>}/>
    <Route path='Tvshow' element={<Tvshow/>}/>
    <Route path='**' element={<Notfound/>}/>
  </Routes>
  
  </>)
}

export default App;
