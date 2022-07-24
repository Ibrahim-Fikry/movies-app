import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate}  from 'react-router-dom'
import Joi from 'joi'
import {mystyle} from './style.module.css'
import Login from './../Login/Login';
export default function Register() {
  
  //#region  add  set user function updater >>>   adduser(x)
  // state
  const[userdata,setuser]=useState({
    
      "first_name":"",
      "last_name":"",
      "email":"",
      "password":"",
      "age":""

  })
 
  function adduser(x){
    // console.log(x.name);
    // let inputname=x.name
    // let inputvalue=x.value
    let useratacopy={...userdata}     //make deep copy
    useratacopy[x.name]=  x.value        // make change in deep copy
    setuser (useratacopy)  // pass deep copy to updater function 
  }
   //#endregion  
  
  //#region     validation
// state
const [errors,seterrors]=useState([])
function validation(){
  let rules=Joi.object({
    "first_name": Joi.string().min(3).max(30).required(),
    "last_name" :Joi.string().alphanum().min(3).max(30).required(),
    "email"     :Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    "password"  :Joi.string(),
    "age"       :Joi.number().min(20).max(60).required()
  })
// let validationresult=  rules.validate(userdata,{abortEarly:true}) 
let validationresult=  rules.validate(userdata,{abortEarly:false})
console.log('validation',validationresult);
if (validationresult.error !==undefined) {
  // console.log('validation',validationresult.error.details);
  seterrors(validationresult.error.details)
  return false;
}else{return true}}
//#endregion
  
  //#region  ---------------------------------------------------------- api     senduser(info)  
  
// useEffect(()=>{
//   // console.table(userdata);  
// }  
// ,[userdata])
let navigation = useNavigate()
// state
const [msg,setmsg]=useState('')
async function senduser(info){
   info.preventDefault()
   if(validation()=== true){
    
      // let response = await axios.post('https://route-egypt-api.herokuapp.com/signup',userdata)
      let {data}= await axios.post('https://route-egypt-api.herokuapp.com/signup',userdata)
      console.log('ibrahim',data); 
      setmsg(data.message)
      // if (data.message === 'success') {
      //   navigation('/Login')
      // }
      // else
      // {
      //   setmsg(data.message)
      // }
    }
    
}

//#endregion

  //#region     component function Register()  return

return (
    <>
    <div className='container mt-3'>
      <h1 className='text-center text-capitalize mb-3'>Register Form</h1>
      {/* {errors.length!==0? errors.map((error)=>{ return <p className='text-danger'>{error.message}</p>}):""} */}
      {/* {errors.length!==0? errors.filter((error)=>error.contain('first_name')):""} */}
      
      {/* <form className='w-50 m-auto p-3 ' action="" onSubmit={(EI)=>{senduser(EI)}}>     full syntax */}
      <form className='w-50 m-auto p-3 ' action=""  onSubmit={EI=>senduser(EI)}>     
    
        <label htmlFor="fname" className='mb-2 mt-2'>First Name :</label>
        <input id='fname' type="text" className='form-control ' name='first_name' onChange={(e)=>{adduser(e.target)}} />
        {errors.length!==0?errors.map((error)=> error.message.includes('first_name')?
        <h6 className='text-danger'>{
        // error.message
        // use ternary operator to cusotme error message
        error.message.includes("alpha-numeric")?error.message="please must contain character only":error.message
        }</h6>
        :""):""}

        
        <label htmlFor="lname" className='mb-2 mt-2'>Last Name :</label>
        {/* <input id='lname' type="text" className='form-control ' name='last_name' onChange={(e)=>{adduser(e.target)}} />  full syntax*/}
        <input id='lname' type="text" className='form-control ' name='last_name' onChange={e=>adduser(e.target)} />
        {errors.length!==0?errors.map((error)=> error.message.includes('last_name')? <h6 className='text-danger'>{error.message}</h6>:""):""}

        
        <label htmlFor="age" className='mb-2 mt-2'>Age :</label>
        <input id='age' type="text" className='form-control ' name='age' onChange={e=>adduser(e.target)} />
        {errors.length!==0?errors.map((error)=> error.message.includes('age')? <h6 className='text-danger'>{error.message}</h6>:""):""}

       
        <label htmlFor="email" className='mb-2 mt-2'>Email :</label>
        <input id='email' type="text" className='form-control ' name='email' onChange={e=>adduser(e.target)}/>
        {errors.length!==0?errors.map((error)=> error.message.includes('email')? <h6 className='text-danger'>{error.message}</h6>:""):""}

        
        <label htmlFor="password" className='mb-2 mt-2'>Password :</label>
        <input id='password' type="password" className='form-control ' name='password' onChange={e=>adduser(e.target)} />
        {errors.length!==0?errors.map((error)=> error.message.includes('password')? <h6 className='text-danger'>{error.message}</h6>:""):""}

        
        <button type='onSubmit' className='btn btn-info mt-2'>Register</button>
        <h3 className='text-success'>{msg}</h3>
      </form>
      
    </div>
    </>
  )
  
//#endregion
}
