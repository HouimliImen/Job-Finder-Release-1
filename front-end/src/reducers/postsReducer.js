import * as types from "../actions/types";

const  initialState={

    posts:null,
    isLoading:false
}

/*export const redirectToHome = history => () => {
    history.push('/');
}*/
export const postReducer = (state=initialState,action)=>{
    switch (action.type){



        case types.GET_POSTS_LOADING:
            return {
                ...state.posts,
                isLoading:true
            }
        case types.GET_POSTS_SUCCESS:
            return{
                posts: action.payload,
                isLoading: false
            }
        case types.GET_POSTS_FAIL:
            return{
                errors: action.payload
            }



        default:
            return state
    }
}
export default postReducer

