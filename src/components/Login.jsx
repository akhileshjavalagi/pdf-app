import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import "./cssFiles/Login.css"
import { useDispatch, useSelector } from 'react-redux';
import { loginForm } from '../redux/LoginRedux/action';

export default function Login() {
            const [username , setUsername] = React.useState("");
            const [password , setPassword]  = React.useState("");
            const dispatch = useDispatch();
            
            const {isAuthenticated,token} = useSelector((state) => state.login);
            console.log(token,isAuthenticated)
            const navigate = useNavigate();
            
            const handleSubmit = ()=>{
                const cred = {
                    username,
                    password
                }
               // console.log(cred);
               dispatch(loginForm(cred))
            };
            
            if(isAuthenticated){
                return <Navigate to="/files"/>
            }
  
  return (
    <div>
      <div className="container">

        <dive>
            <h1>Sign in</h1>
            <form action="" method="get">
             <div>
                <p><label for="email">Username</label></p>
                <input type="text" id="email" name="email" required 
                onChange={(e)=>{
                        setUsername(e.target.value)
                }}
                />
             </div>
             <div>
                <p><label for="userNmae">Password</label></p>
                <input type="password" id="password" required 
                onChange={(e)=>{
                        setPassword(e.target.value)
                }}
                />
             </div>
             <Link to="files">
            <button onClick={handleSubmit} type="button" id="btn">Sign in Now</button>
            </Link>
             <p>Not a register user? 
             <Link to="signup">
            <span> Sign Up</span> 
            </Link>
            </p>
             
            </form>
            <div></div>  
        </dive>
    </div>
    </div>
  )
}
