import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useSelector(store => store.authentication)
    if(!isAuthenticated){
        return children
    }
  return <Navigate to='/'/>
};