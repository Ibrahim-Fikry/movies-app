import React from 'react'
import {Link} from'react-router-dom'
export default function Navbar() {
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='Home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='Movies'>Movies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='Tvshow'>Tvshow</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='People'>People</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='About'>About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='Network'>Networks</Link>
            </li>


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

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='Login'>Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='Register'>Register</Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
