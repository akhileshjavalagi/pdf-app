import axios from "axios";

export const SIGN_LOADING = "SIGN_LOADING"; 
export const SIGN_SUCCESS = "SIGN_SUCCESS";
export const SIGN_ERROR = "SIGN_ERROR";

export const singLoading = () => ({
    type:SIGN_LOADING
});

export const signSuccess = (payload) => ({
    type: SIGN_SUCCESS,
    payload
});

export const singError = ()=> ({
    type: SIGN_ERROR
});

export const RegisterForm = (name, email , password , username , mobile , description) => (dispatch)=>{
    dispatch(singLoading());
   fetch("https://masai-api-mocker.herokuapp.com/auth/register" , {
       method: "POST",
       body: JSON.stringify(name, email , password , username , mobile , description),
       headers: {
           "Content-Type" : "application/json"
       }
   }).then((res) => res.json())
   .then((res) =>{  
       dispatch(signSuccess(name, email , password , username , mobile , description))
     
   }) 
   .catch((err)=> dispatch(singError( )))
}
 
