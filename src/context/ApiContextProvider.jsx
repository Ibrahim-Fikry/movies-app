import{ React,useState} from 'react'
import axios from 'axios'
import  {ApiContext}  from './Apicontext';

export default function ApiContextProvider(props) {
    let [movies, setmovies]  =useState([])
    let [tvs, settvs]        =useState([])
    let [persons, settperson]=useState([])
    
   async function getdata(mediatype,setterfunction){
   let {data}= await axios.get('https://api.themoviedb.org/3/trending/'+mediatype+'/day?api_key=a5208e5b49c6070ccb08e9c12afd5949')
   setterfunction(data.results);
  } 
    
    
  return (
    <>
    <ApiContext.Provider  value={{movies, setmovies,tvs, settvs,persons, settperson,getdata}}>
      {props.children}
    </ApiContext.Provider>
    </>
  )
}
