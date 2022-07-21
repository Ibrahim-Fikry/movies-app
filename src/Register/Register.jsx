import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Joi from 'joi'
import {mystyle} from './style.module.css'
export default function Register() {
  // state
  const[userdata,setuser]=useState({
    
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
             
// useEffect(()=>{
//   // console.table(userdata);  
// }  
// ,[userdata])
const [msg,setmsg]=useState('')
async function senduser(info){
   info.preventDefault()
   if(validation()===true){
      let {data}= await axios.post('https://route-egypt-api.herokuapp.com/signup',userdata)
      console.log(data); 
      setmsg(data.message)
    }else{}
}
// state
const [errors,seterrors]=useState([])
function validation(){
  let rules=Joi.object({
    "first_name": Joi.string().alphanum().min(3).max(30).required(),
    "last_name":Joi.string().alphanum().min(3).max(30).required(),
    "email":Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    "password":Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    "age":Joi.number().min(20).max(60).required()
  })
// let validationresult=  rules.validate(userdata,{abortEarly:true}) 
let validationresult=  rules.validate(userdata,{abortEarly:false})
console.log(validationresult.error.details);
if (validationresult.error !==undefined) {
  seterrors(validationresult.error.details)
  return true;
}else{return false}}
  return (
    <>
    <div className='container mt-3'>
      <h1 className='text-center text-capitalize mb-3'>Register Form</h1>
      {errors.length!==0? errors.map((error)=>{return <p className='text-danger'>{error.message}</p>}):""}
      <form className='w-50 m-auto p-4 ' action="" onSubmit={(EI)=>{
        senduser(EI)
        
        }}>
        
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
        <input id='password' type="text" className='form-control mb-4' name='password' onChange={(e)=>{
          adduser(e.target)
        }} />
        
        <button type='onSubmit' className='btn btn-info'>Register</button>
        <h3 className='text-success'>{msg}</h3>
      </form>
      
    </div>
    </>
  )
}
