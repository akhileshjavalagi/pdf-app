import { SIGN_ERROR , SIGN_LOADING , SIGN_SUCCESS } from "./action";

const initState = {
            loading: false,
            isAuthention: false,
            name: "",
            email: "",
            password: "",
            username: "",
            mobile: "",
            description: "",
            error: false
}

export const signupReducer = (store = initState , {type , payload})=>{
    switch(type){
        case SIGN_LOADING:
            return{...store,
            loading: true,
            isAuthention: false,
            error:false
};
        case SIGN_SUCCESS:
            return{...store,
                        loading:false,
                        name: payload.name,
                        email: payload.email,
                        password: payload.password,
                        username: payload.username,
                        mobile: payload.mobile,
                        description: payload.description,
                        isAuthention: true,
                        error:false };
        case SIGN_ERROR:
            return {...store , 
            loading:false,
            isAuthention: false,
            error:true
            }
        default:
            return store;   
    }
}