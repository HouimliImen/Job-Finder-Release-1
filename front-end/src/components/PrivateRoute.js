import React from 'react'
import {Route} from 'react-router-dom'
import {useSelector} from "react-redux";
import Login from "../pages/Login";
import { Redirect } from 'react-router';
import UploadCv from "../pages/CreateCV";
const PrivateRoute = ({component:Component,...rest}) => {

           // component : c une props
          // component:Component : example component={Login}
         // Les props dans la componts Route est  :  exact,path,componet
        // <Route exact path="/login" component={Login} />
       // component est une props de privateRoute exemple :
      // <PrivateRoute exact path="/uploadCv" component={UploadCv} />
    const auth=useSelector(state=>state.auth)

        // state.auth=
       // -token(pin): null
      // - user(pin): null
     //  -isAuth(pin): false
    //  -errors(pin): null
    return (
        // render (ou component : nn je pense ) (tnejim t3adi fihe props) : deux possibilités avec le react-router
       <Route {...rest}
              render={props=>!auth.isAuth?
                  <Redirect to="/login"  /> :   <Component {...props}/>}>
                

       </Route>
    )
}

export default PrivateRoute
