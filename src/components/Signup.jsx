import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../redux/SignupRedux/action';
import "./cssFiles/Signup.css"
import { useNavigate, Navigate } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
//import { color } from '@chakra-ui/styled-system';

export default function Signup() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDesc] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch()

  //const users = useSelector(state => state.users);

  const register = () => {
    const payload = {
      name,
      email,
      password,
      username,
      mobile,
      description
    }

    dispatch(RegisterForm(payload))
  }
  const { isAuthention } = useSelector((store) => store.sign);

  if (isAuthention) {
    return <Navigate to="/" />
  }

  return (
    <>
    <div className="container">
        <dive>
            <h1 className="heading">Sign Up</h1>
           
            <div action="" method="get">
             <div>
                <p><label for="email">Name</label></p>
                <input type="text" id="email" name="email" required autocomplete="off"
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                />
             </div>
             <div>
                <p><label for="email">Email Address</label></p>
                <input type="email" id="email" name="email" required autocomplete="off"
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                />
             </div>
             <div>
                <p><label for="password">Description</label></p>
                <input type="text" id="password" required 
                onChange={(e)=>{
                  setDesc(e.target.value)
                }}
                />
             </div>
             <div>
                <p><label for="email">Username</label></p>
                <input type="text" id="email" name="email" required autocomplete="off"
                onChange={(e)=>{
                  setUsername(e.target.value)
                }}
                />
             </div>
             <div>
                <p><label for="email">Password</label></p>
                <input type="password" id="email" name="email" required autocomplete="off"
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                />
             </div>
             <div>
                <p><label for="email">Mobile</label></p>
                <input type="text" id="email" name="email" required autocomplete="off"
                onChange={(e)=>{
                  setMobile(e.target.value)
                }}
                />
             </div>

             <button type="button" id="btn"
             onClick = {register}
             >Sign Up Now</button>
             <p>Already a member? <a href="login.html">
               <Link to="/">
               <span>
               Log in
               </span>
               </Link>
               </a></p>
            </div>
            <div></div>  
        </dive>
    </div>
    </>
  )
}
