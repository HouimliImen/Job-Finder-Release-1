import {
    LOAD_USER_FAIl,
    LOAD_USER_SUCCESS,
    LOGIN_FAIl,
    LOGIN_SUCCESS, LOGOUT,
    REGISTER_FAIl,
    REGISTER_SUCCESS
} from "../actions/types";

const  initialState={
    token:localStorage.getItem('token'),
    user:null,
   // categories:null,
    isAuth:false,
    errors:null,
    connectedAs:'',
   // isLoading:false
    // hasRole:null
}

export const redirectToHome = history => () => {
    history.push('/');
}
 export const authReducer = (state=initialState,action)=>{
    switch (action.type){

        // case LOAD_EMPLOYER_SUCCESS:
        //     return{
        //         ...state,
        //         user:action.payload,
        //         errors: null,
        //        // connectedAs: "Employer",
        //         isAuth: true
        //     }

        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user:action.payload,
                errors: null,
                isAuth: true,
                connectedAs:action.payload

               

            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                token:action.payload.token,
                isAuth:true,
                errors: null,
                user:action.payload,
               // connectedAs: "Candidate"
            }
        // case REGISTER_Emp_SUCCESS:
        //     localStorage.setItem('token',action.payload.token)
        //     return{
        //         ...state,
        //         token:action.payload.token,
        //         isAuth:true,
        //         errors: null,
        //         connectedAs: "Employer"
        //     }
        case REGISTER_SUCCESS :
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                token:action.payload.token,
                isAuth:true,
                errors: null,
                // connectedAs: "Candidate"

            }
                // localStorage.removeItem('token')
                // return{
                //     ...state,
                //     isAuth:false,
                //     errors: action.payload
                //
                // }
        case LOGIN_FAIl        :
        case LOAD_USER_FAIl    :
            case REGISTER_FAIl :
            /* Clear item de la dernier login de qq */
            localStorage.removeItem('token')
            return{
                ...state,
                isAuth:false,
                errors: action.payload,

                   }

        case LOGOUT:
            localStorage.removeItem('token')
            return{
                   isAuth:false,
                   errors:null,
                   user:null
                  }
                  // /* ----------------Categorie*--------------------------/
        // case GET_CATEGORIE_SUCCESS:
        //     return{
        //         categories: action.payload,
        //         isLoading: false
        //     }
        // case GET_CATEGORIE_FAIL:
        //     return{
        //         errors: action.payload
        //     }
        //     case GET_CATEGORIE_LOADING:
        //         return {
        //             ...state.categories,
        //             isLoading:true
        //         }
        default:
            return state
    }
}
export default authReducer

