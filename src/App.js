
import './App.css';
import  {useState,useEffect} from 'react'
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
import Logout from './Logout/Logout';
import SingleMovie from './singlemovie/SingleMovie';
function App() {
  let [islogin,setislogin]=useState(null)
  function checklogin(){
     let loginstatus = localStorage.getItem("mytoken")
     setislogin(loginstatus)
  }
  useEffect(()=>{
    let loginstatus = localStorage.getItem("mytoken")
    setislogin(loginstatus)
    
  },[])
  return(<>
  {/* islogin={islogin} */}
  <Navbar islogin={islogin} checklogin={checklogin}  />
  
  <Routes>
  <Route path='/' element={<Register/>}/>
    <Route path='Home' element={<Home/>} />
    {/* dynamic routing */}
    <Route path='Movie/:movieId' element={<SingleMovie/>} />
    <Route path='About' element={<About/>}/>
    <Route path='Movies' element={<Movies/>}/>
    <Route path='Network' element={<Network/>}/>
    <Route path='People' element={<People/>}/>
    <Route path='Tvshow' element={<Tvshow/>}/>
    <Route path='Register' element={<Register/>}/>
    <Route path='Login' element={<Login checklogin={checklogin}  />}/>
    <Route path='Logout' element={<Logout/>}/>
    <Route path='**' element={<Notfound/>}/>
  </Routes>
  
  </>)
}

export default App;
