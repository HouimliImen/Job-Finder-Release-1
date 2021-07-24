import axios from 'axios'
const setTocken=()=>{
    let token=localStorage.getItem('token')


    if(token){
        axios.defaults.headers.common['auth-token']=token

    }
    else {
        // si deconnected auth-token n'est pas supprimer automatiquement il faut supprimé

       delete axios.defaults.headers.common['auth-token']

    }
}
export default setTocken

