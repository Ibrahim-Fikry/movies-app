
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
import  jwtDecode  from 'jwt-decode';
import ProtectedRoute from './protectedroute/ProtectedRoute';
function App() {
  let [islogin,setislogin]=useState(null)
  function checklogin(){
     let loginstatus = localStorage.getItem("mytoken")
     setislogin(loginstatus)
  }
  useEffect(()=>{
  
    let loginstatus = localStorage.getItem("mytoken")
    setislogin(loginstatus)
    
  },[islogin])
  return(<>
  {/* islogin={islogin} */}
  <Navbar islogin={islogin} checklogin={checklogin}  />
  
  <Routes>
  <Route path='/' element={<Register/>}/>
    <Route path='Home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    {/* dynamic routing */}
    <Route path='Movie/:movieId' element={<ProtectedRoute><SingleMovie/></ProtectedRoute>} />
    <Route path='About' element={<ProtectedRoute><About/></ProtectedRoute>}/>
    <Route path='Movies' element={<ProtectedRoute><Movies/></ProtectedRoute>}/>
    <Route path='Network' element={<ProtectedRoute><Network/></ProtectedRoute>}/>
    <Route path='People' element={<ProtectedRoute><People/></ProtectedRoute>}/>
    <Route path='Tvshow' element={<ProtectedRoute><Tvshow/></ProtectedRoute>}/>
    <Route path='Register' element={<Register/>}/>
    <Route path='Login' element={<Login checklogin={checklogin}  />}/>
    <Route path='Logout' element={<Logout/>}/>
    <Route path='**' element={<Notfound/>}/>
  </Routes>
  
  </>)
}

export default App;
