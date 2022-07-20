import React, { useEffect, useState } from 'react'
import {mystyle} from './style.module.css'
export default function Register() {
  
  let[userdata,setuser]=useState({
    
      "first_name":"",
      "last_name":"",
      "email":"",
      "password":"",
      "age":""

  })
  // shollow copy not working with updating state 
  // function adduser(x){
  //   userdata.first_name=x   
  //   setuser (userdata)
  // }
  function adduser(x){
    // console.log(x.name);
    // let inputname=x.name
    // let inputvalue=x.value
    let useratacopy={...userdata}     //make deep copy
    useratacopy[x.name]=  x.value        // make change in deep copy
    setuser (useratacopy)  // pass deep copy to updater function 
  }
             
useEffect(()=>{
  console.table(userdata);  
}  
,[userdata])
  
  return (
    <>
    <div className='container mt-3'>
      <h1 className='text-center text-capitalize mb-3'>Register Form</h1>
      <form className='w-50 m-auto p-4 ' action="">
        
        <label htmlFor="fname" className='mb-2'>First Name :</label>
        <input id='fname' type="text" className='form-control mb-2' name='first_name' onChange={(e)=>{
          
          adduser(e.target)
        }} />
        
        <label htmlFor="lname" className='mb-2'>Last Name :</label>
        <input id='lname' type="text" className='form-control mb-2' name='last_name' onChange={(e)=>{
          
          adduser(e.target)
        }} />
        
        <label htmlFor="age" className='mb-2'>Age :</label>
        <input id='age' type="text" className='form-control mb-2' name='age' onChange={(e)=>{
          adduser(e.target)
        }} />
        
        <label htmlFor="email" className='mb-2'>Email :</label>
        <input id='email' type="text" className='form-control mb-2' name='email' onChange={(e)=>{
          adduser(e.target)
        }}/>
        
        <label htmlFor="password" className='mb-2'>Password :</label>
        <input id='password' type="text" className='form-control mb-2' name='password' onChange={(e)=>{
          adduser(e.target)
        }} />
        
        <button className='btn btn-info'>Register</button>
      </form>
      
    </div>
    </>
  )
}
