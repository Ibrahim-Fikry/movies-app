import {React,useEffect,useContext} from 'react'
import { ApiContext } from './../context/Apicontext';

export default function People() {
  
  let {persons, settperson,getdata}=useContext(ApiContext)
  console.log('pppp',persons)
   useEffect(()=>{
    getdata('person',settperson)
   },[])
  return (
    <>
      <div className='container pt-3 '>
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center  '>
            
          <div>
          <div className='border border-primary w-25 mb-4'></div>
             <h1>trinding<br/>persons <br/> watch now</h1>
             <p>most watches movies by day</p>
          <div className='border border-primary w-75 mt-4 '></div>
          </div>
          </div>
           {persons.map((person,index)=> 
           person.profile_path !== null ? 
              <div key={index} className='col-md-2' >
                {/* <Link to='Movie'>  rong   */}
                {/* <Link to={`/Movie/${movie.id}`}> */}
                <div>
                  <img  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} className='w-100' alt="" />
                  <p>{person.original_name}</p>
                   
                </div>
                {/* </Link> */}
              </div>
              :
              ""
            
          )
            }
        </div>
      </div>
    </>
  )
}