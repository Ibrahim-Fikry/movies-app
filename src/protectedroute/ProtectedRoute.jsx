import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
    
    // let navigate=useNavigat()
    
    //law  3amel login
    if (localStorage.getItem('mytoken')!== null) {
        return (
            // {props.children}
            props.children
          ) 
    }else{
    //law  b null ya3ni mich 3amel login
        return (
        //   {navigate('/Login')}
          <Navigate to='/Login'/>
        
        )
    }
}
