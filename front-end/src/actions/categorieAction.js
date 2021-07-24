import axios from "axios";
import {GET_CATEGORIE_FAIL, GET_CATEGORIE_LOADING, GET_CATEGORIE_SUCCESS} from "./types";


export const getAllcategories=()=>dispatch=>{

    dispatch({
        type:GET_CATEGORIE_LOADING
    })
    axios.get('/categorie/all')
        .then(res=>dispatch({
            type:GET_CATEGORIE_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:GET_CATEGORIE_FAIL,
            payload:err.response.data.errors
        }))


}
