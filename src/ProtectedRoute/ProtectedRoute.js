import React from 'react'
import { Navigate } from 'react-router-dom'
import { decodeToken } from "react-jwt";

const ProtectedRoute = ({children})=>{
    const token =localStorage.getItem('jwt')
    const decodedToken = decodeToken(token);
    console.log(decodedToken)
    if(!token || decodedToken?.role === 0){
        return <Navigate to='/' />
    }
    return children
}

export default ProtectedRoute