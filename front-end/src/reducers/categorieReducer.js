import {GET_CATEGORIE_FAIL, GET_CATEGORIE_LOADING, GET_CATEGORIE_SUCCESS} from "../actions/types";

const  initialState={

    categories:[],
    isLoading:false
}

/*export const redirectToHome = history => () => {
    history.push('/');
}*/
export const categorieReducer = (state=initialState,action)=>{
    switch (action.type){



        case GET_CATEGORIE_LOADING:
            return {
                ...state.categories,
                isLoading:true
            }
        case GET_CATEGORIE_SUCCESS:
            return{
                categories: action.payload,
                isLoading: false
            }
        case GET_CATEGORIE_FAIL:
            return{
                errors: action.payload
            }



        default:
            return state
    }
}
export default categorieReducer

