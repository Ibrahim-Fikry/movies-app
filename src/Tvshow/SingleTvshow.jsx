import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from'axios'
export default function SingleTvshow() {
    let [singelTvshow, setsingleTvshow]=useState({})
    // useParams()  return     Object { movieId: "507086" }
    //using destructring
  let {TvshowId}=  useParams()
    async function getdata(Id){
      let {data}= await axios.get(`https://api.themoviedb.org/3/tv/${Id}?api_key=a5208e5b49c6070ccb08e9c12afd5949&language=en-US`)
      setsingleTvshow(data);
    //    console.log(data);
       console.log(TvshowId);
     }
     useEffect(()=>{
      getdata(TvshowId)
     },[])
     return <>
     <div className='container '>
         <div className="row">
             <div className="col-md-4">
                 
                 <img className='w-100' src={`https://image.tmdb.org/t/p/w500${singelTvshow.poster_path}`} alt="" />
                 
             </div>
             <div className="col-md-8">
                 <h1> Title : {singelTvshow.title}</h1>
                 <h4>Vote Average : {singelTvshow.vote_average}</h4>
                 <h4>Release Date : {singelTvshow.release_date}</h4>
                 <h4>status       : {singelTvshow.status}</h4>
             </div>
         </div>
         
     </div>
   
   </>
}
