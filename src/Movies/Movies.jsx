import {React,useEffect,useContext} from 'react'

import {Link} from 'react-router-dom'

import { ApiContext } from './../context/Apicontext';

export default function Movies() {
  let {movies,setmovies,getdata}=useContext(ApiContext)
  
  // const [movies, setmovies]=useState([])
  // async function getdata(){
  //   let {data}= await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=a5208e5b49c6070ccb08e9c12afd5949')
  //   setmovies(data.results);
  //   // console.log('ibrahim',movies);
  //  }
  
   useEffect(()=>{
    getdata('movie',setmovies)
   })
  return (
    <>
      <div className='container pt-3 '>
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center  '>
            
          <div>
          <div className='border border-primary w-25 mb-4'></div>
             <h1>trinding<br/>Movies <br/> watch now</h1>
             <p>most watches movies by day</p>
          <div className='border border-primary w-75 mt-4 '></div>
          </div>
          </div>
           {movies.map((movie,index)=> 
            
              <div key={index} className='col-md-2' >
                {/* <Link to='Movie'>  rong   */}
               
                <div>
                <Link to={`/Movie/${movie.id}`}>
                  <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100' alt="" />
                  
                  </Link>
                  <p className='w-100'>{movie.title}</p>
                  {/* <h4 className='text-decoration-none'>{movie.title}</h4> */}
                   
                </div>
               
              </div>
            
          )
            }
        </div>
      </div>
    </>
  )
}
