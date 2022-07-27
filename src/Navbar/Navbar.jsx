import {React} from 'react'
import {Link,NavLink,useNavigate} from'react-router-dom'
export default function Navbar({islogin,checklogin}) {
  // let navigation=useNavigate()
  function funclogout() {
   localStorage.removeItem('mytoken')
   checklogin()
  //  navigation('/Login')
    
   
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent shadow ">
      <div className="container "> 
        <Link className="navbar-brand" to='Home'>Movies App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {islogin!==null? 
          <>
            <li className="nav-item">
              <NavLink  style={({isActive})=>{return{
                backgroundColor: isActive? "lightslategrey":"",
                borderRadius:'5%',
                
              }}}
              className="nav-link active" aria-current="page" to='Home'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  style={({isActive})=>{return{
                backgroundColor: isActive? "lightslategrey":"",
                borderRadius:'5%',
                
              }}} className="nav-link active" aria-current="page" to='Movies'>Movies</NavLink>
            </li>

            <li className="nav-item">
              <NavLink  style={({isActive})=>{return{
                backgroundColor: isActive? "lightslategrey":"",
                borderRadius:'5%',
              }}} className="nav-link active" aria-current="page" to='Tvshow'>Tvshow</NavLink>
            </li>

            <li className="nav-item">
              <NavLink  style={({isActive})=>{return{
                backgroundColor: isActive? "lightslategrey":"",
                borderRadius:'5%',
                
              }}} className="nav-link active" aria-current="page" to='People'>People</NavLink>
            </li>

            <li className="nav-item">
              <NavLink  style={({isActive})=>{return{
                backgroundColor: isActive? "lightslategrey":"",
                borderRadius:'5%',
                
              }}} className="nav-link active" aria-current="page" to='About'>About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink  style={({isActive})=>{return{
                backgroundColor: isActive? "lightslategrey":"",
                borderRadius:'5%',
                
              }}} className="nav-link active" aria-current="page" to='Network'>Networks</NavLink>
            </li>

          </>:''
        }

          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

            </li>
            <li className="nav-item d-flex justify-content-between align-items-center">
              <i className='fab fa-facebook  mx-2  fa-2x'></i>
              <i className='fab fa-instagram  mx-2 fa-2x'></i>
              <i className='fab fa-twitter  mx-2 fa-2x'></i>
              <i className='fab fa-spotify  mx-2 fa-2x'></i>
            </li>

         {/* islogin come from prop export default function Navbar({islogin}) { */}
             {islogin == null?<>
              <li className="nav-item">
              <NavLink  style={({isActive})=>{return{
                backgroundColor: isActive? "lightslategrey":"",
                borderRadius:'5%',
                
              }}} className="nav-link active" aria-current="page" to='Register'>Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  style={({isActive})=>{return{
                backgroundColor: isActive? "lightslategrey":"",
                borderRadius:'5%',
                
              }}} className="nav-link active" aria-current="page" to='Login'>Login</NavLink>
            </li>
             </>:""}
           {islogin!==null?
           <> <li className="nav-item">
           <NavLink  style={({isActive})=>{return{
             backgroundColor: isActive? "lightslategrey":"",
             borderRadius:'5%',
           }}} className="nav-link active" aria-current="page"  to='Login'>
             <a onClick={funclogout} href>LogOut</a>
             </NavLink>
         </li></>
           :''}
           



          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
