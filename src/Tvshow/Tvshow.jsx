import {React,useEffect,useContext} from 'react'
import { ApiContext } from './../context/Apicontext';
import { Link } from 'react-router-dom';

export default function Tvshow() {
  let {tvs, settvs,getdata}=useContext(ApiContext)
  useEffect(()=>{
    getdata('tv',settvs)
  },[])
  return (
    <>
      <div className='container pt-3 '>
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center  '>
            
          <div>
          <div className='border border-primary w-25 mb-4'></div>
             <h1>trinding<br/>tvs <br/> watch now</h1>
             <p>most watches tvs by day</p>
          <div className='border border-primary w-75 mt-4 '></div>
          </div>
          </div>
           {tvs.map((tv,index)=> 
            
              <div key={index} className='col-md-2' >
                {/* <Link to='tv'>  rong   */}
                <Link to={`/Tvshow/${tv.id}`}>
                <div>
                  <img  src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className='w-100' alt="" />
                  <p>{tv.title}</p>
                   
                </div>
                </Link>
              </div>
            
          )
            }
        </div>
      </div>
    </>
  )
}
