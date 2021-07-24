import {combineReducers} from 'redux'
import authReducer from "./authReducer";
import {categorieReducer} from "./categorieReducer";
import postReducer from './postsReducer';

export default combineReducers({auth: authReducer,catR:categorieReducer,postR:postReducer})
