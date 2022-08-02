
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
import axios from "axios" 

export const loginLoading = ()=>({
    type : LOGIN_LOADING
});

export const loginSuccess = (payload)=> ({
   type: LOGIN_SUCCESS , 
   payload
});

export const loginFailure = ()=> ({
    type: LOGIN_FAILURE
});



export const loginForm = (cred) => (dispatch)=>{
    dispatch(loginLoading())
    axios.post('https://masai-api-mocker.herokuapp.com/auth/login',cred)
    .then((response)=>dispatch(loginSuccess({username:cred.username,token:response.data.token})))
    .catch(()=>dispatch(loginFailure(alert("Invalid Details"))))
}