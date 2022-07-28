import {React,useState} from 'react'
import axios from 'axios'
// import { Joi } from 'joi';   will make error  wrong import
import  Joi  from 'joi';     //  right import
import { useNavigate } from 'react-router-dom';

// export default function Login(props) {
  //   props return object conatin data from parent 
  // you cna use destructring insted   of  props .checklogin
  // 
export default function Login({checklogin}) {
  
//#region  add  set user function updater >>>   adduser(x)

  const[userdata,setuser]=useState({
    "email":"",
    "password":"",
  })

function adduser(x){
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
     "email"     :Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
     "password"  :Joi.string(),
   })
   // let validationresult=  rules.validate(userdata,{abortEarly:true}) 
   let validationresult=  rules.validate(userdata,{abortEarly:false})
   console.log('validation',validationresult.error);
   if (validationresult.error !==undefined) {
   // console.log('validation',validationresult.error.details);
   seterrors(validationresult.error.details)
   return false;
   }else{return true}
}
//#endregion

//#region  ---------------------------------------------------------- api     senduser(info)  

// useEffect(()=>{
//   // console.table(userdata);  
// }  
// ,[userdata])

 let navigation = useNavigate( )
const [msg,setmsg]=useState('')
const [btnspin,setbtnspin]=useState(true)

async function senduser(info){
 info.preventDefault()
 setbtnspin(false)
//  if(validation()=== true){   long syntax
 if(validation()){  // short syntax
  
    // let response = await axios.post('https://route-egypt-api.herokuapp.com/signup',userdata)
    let {data}= await axios.post('https://route-egypt-api.herokuapp.com/signin',userdata)
    setbtnspin(true)
    // console.log('ibrahim',data); 
    // setmsg(data.message)
    if (data.message === 'success') {
      localStorage.setItem("mytoken",data.token)
      // checklogin come from props of login component
      //  export default function Login({checklogin}) 
      checklogin()
      navigation('/Home')
    }
    else
    {
      setmsg(data.message)
    }
  }
  
}

//#endregion

//#region     component function Register()  return


  return (
    <>
    <div className='container mt-3'>
      <h1 className='text-center text-capitalize mb-3'>Login Form</h1>
      {/* {errors.length!==0? errors.map((error)=>{ return <p className='text-danger'>{error.message}</p>}):""} */}
      {/* {errors.length!==0? errors.filter((error)=>error.contain('first_name')):""} */}
      
      {/* <form className='w-50 m-auto p-3 ' action="" onSubmit={(EI)=>{senduser(EI)}}>     full syntax */}
      <form className='w-50 m-auto p-3 ' action=""  onSubmit={EI=>senduser(EI)}> 
             
        <label htmlFor="email" className='mb-2 mt-2'>Email :</label>
        <input id='email' type="text" className='form-control ' name='email' onChange={e=>adduser(e.target)}autoComplete='off'/>
        {errors.length!==0?errors.map((error)=> error.message.includes('email')? <h6 className='text-danger'>{error.message}</h6>:""):""}

        
        <label htmlFor="password" className='mb-2 mt-2'>Password :</label>
        <input id='password' type="password" className='form-control ' name='password' onChange={e=>adduser(e.target)} autoComplete='off'  />
        {/* {errors.length!==0?errors.map((error)=> error.message.includes('password')? <h6 className='text-danger'>{error.message}</h6>:""):""} */}
        {errors.length!==0?errors.map((error)=><h6 className='text-danger'>{error.message}</h6>):""}

        
        <button type='onSubmit' className='btn btn-info mt-2'>{ btnspin? 'Login': <i className='fas fa-spin fa-spinner fa-1x'></i>}</button>
        <h3 className='text-success'>{msg}</h3>
      </form>
      
    </div>
    </>
  )
 }

