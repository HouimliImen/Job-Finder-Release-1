import axios from "axios";
import * as types from "./types";


export const getAllposts=()=>dispatch=>{

 
    axios.get('/post/all')
        .then((res)=>{
            try {
                dispatch({
                    type:types.GET_POSTS_SUCCESS,
                    payload:res.data
                })
                
            } catch (e) {
                console.log(res,e)
                
            }
        }
        )
        .catch(err=>dispatch({
            type:types.GET_POSTS_FAIL,
            payload:err.response.data.errors
        }))


}

