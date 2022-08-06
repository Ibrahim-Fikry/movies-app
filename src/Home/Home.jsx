// import React from 'react'
import {React,useEffect, useContext} from 'react'
import axios from 'axios'
// import Movies from './../Movies/Movies';
import { ApiContext } from '../context/Apicontext';
import { useState } from 'react';



export default function Home() {
  // using context
  let {movies, setmovies,tvs, settvs,persons, settperson,getdata}=useContext(ApiContext)
  
  
  
  // 2- using  function with parameters
//   const [movies, setmovies]=useState([])
//   const [tvs, settvs]=useState([])
//   const [persons, settperson]=useState([])
  
//  async function getdata(mediatype,setterfunction){
//  let {data}= await axios.get('https://api.themoviedb.org/3/trending/'+mediatype+'/day?api_key=a5208e5b49c6070ccb08e9c12afd5949')
//  setterfunction(data.results);
// //  console.log(movies);
// }
// ---------------------------------
// 1-first code senario
// async function gettvs(){
//   let {data}= await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=a5208e5b49c6070ccb08e9c12afd5949')
//   settvs(data.results);
//   console.log(movies); 
//  }
useEffect(()=>{
  
  getdata('movie',setmovies)
  getdata('tv',settvs)
  getdata('person',settperson)
 
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
          {/* 7al tany 3alchan a3rd 9 movies */}
          {/* {movies.slice(0 , 10).map((movie) => {
            return(
              <div className='col-md-2'>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100' alt="" />
                <h4>{movie.title}</h4>
              </div>
              </div>
            )
          }) */}
           {movies.map((movie,index) => {
            return(
              index <= 9?<div className='col-md-2'>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100' alt="" />
                <h4>{movie.title}</h4>
              </div>
              </div>:""
            )
          })
            }
        </div>
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center  '>
            
          <div>
          <div className='border border-primary w-25 mb-4'></div>
             <h1>trinding<br/>tv <br/> watch now</h1>
             <p>most watches movies by day</p>
          <div className='border border-primary w-75 mt-4 '></div>
          </div>
          </div>
          {/* 7al tany 3alchan a3rd 9 movies */}
          {/* {movies.slice(0 , 10).map((movie) => {
            return(
              <div className='col-md-2'>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100' alt="" />
                <h4>{movie.title}</h4>
              </div>
              </div>
            )
          }) */}
           {tvs.map((tv,index) => {
            return(
              index <= 9?<div className='col-md-2'>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className='w-100' alt="" />
                <h4>{tv.title}</h4>
              </div>
              </div>:""
            )
          })
            }
        </div>
      
      <div className='row'>
          <div className='col-md-4 d-flex align-items-center  '>
            
          <div>
          <div className='border border-primary w-25 mb-4'></div>
             <h1>trinding<br/>person <br/> watch now</h1>
             <p>most watches movies by day</p>
          <div className='border border-primary w-75 mt-4 '></div>
          </div>
          </div>
          {/* 7al tany 3alchan a3rd 9 movies */}
          {persons.slice(0 , 12).map((person,index) => 
          person.profile_path !== null?
              <div key={index} className='col-md-2'>
              <div >
                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} className='w-100' alt="not found" />
                <h4 className='text-capitalize text-decoration-none'>{person.title}</h4>
              </div>
              </div>
              :''
            )
          }
           {/* {persons.map((person,index) => {
            return(
              index <= 9?<div className='col-md-2'>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} className='w-100' alt="" />
                <h4>{person.name}</h4>
              </div>
              </div>:""
            )
          })
            } */}
        </div>
      </div>
      
      
     
    
    </>
  )
}
