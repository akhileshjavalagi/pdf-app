import React from 'react'
import { Routes, Route } from 'react-router'
import Files from './Files'
import Login from './Login'
//import Navbar from './Navbar'
import Signup from "./Signup"
import { useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router'
import ShowPdf from './ShowPdf'

const PrivateRoute = ({ isAuthenticated  , children="nothing"}) =>{
  return isAuthenticated ? children : <Navigate to="/"  />
}

export default function AllRoutes() {
  const { isAuthenticated } = useSelector((state) => state.login);
  return (
    <div>
      <Routes>
            <Route path="/files" element={
            <PrivateRoute isAuthenticated={isAuthenticated}><Files /></PrivateRoute>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/pdffiles" element={<ShowPdf/>} />
      </Routes>
    </div>
  )
}
