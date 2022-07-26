import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function SingleMovie() {
    let [singelmovie, setsinglemovie]=useState({})
    // useParams()  return     Object { movieId: "507086" }
    //using destructring
  let {movieId}=  useParams()
    async function getdata(movieId){
      let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a5208e5b49c6070ccb08e9c12afd5949&language=en-US`)
       setsinglemovie(data);
    //    console.log(data);
       console.log(movieId);
     }
     useEffect(()=>{
      getdata(movieId)
     },[])
  return <>
    <div className='container '>
        <div className="row">
            <div className="col-md-4">
                
                <img className='w-100' src={`https://image.tmdb.org/t/p/w500${singelmovie.poster_path}`} alt="" />
                
            </div>
            <div className="col-md-8">
                <h1> Title : {singelmovie.title}</h1>
                <h4>Vote Average : {singelmovie.vote_average}</h4>
                <h4>Release Date : {singelmovie.release_date}</h4>
                <h4>status       : {singelmovie.status}</h4>
            </div>
        </div>
        
    </div>
  
  </>
}
