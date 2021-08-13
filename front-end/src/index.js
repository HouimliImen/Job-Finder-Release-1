import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
//import Register from "./pages/Register";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "./components/componentsTemplates/Header";
import store from "./store/store";
import {Provider} from "react-redux";
import UploadCv from "./pages/CreateCV";
import PrivateRoute from "./components/PrivateRoute";
import TestimonialShareExperince from "./components/componentsTemplates/TestimonialShareExperince";
import Contact from './components/componentsTemplates/Contact';
import Rankings from './pages/Rankings';
import Profile from "./pages/Profile";
import Inscription from "./pages/Inscription";
import Daterr from "./pages/Daterr";
import CreateCV from "./pages/CreateCV";
import Posts from './pages/Posts';

ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
           <BrowserRouter>
               <Header/>
               <Switch>
               <Route exact path="/" component={App} />
                   <PrivateRoute exact path="/uploadCv" component={UploadCv} />
                   <PrivateRoute exact path="/profile" component={Profile} />
                   {/*<Route exact path="/shareexperience" component={TestimonialShareExperince} />*/}
                   <Route exact path="/contact"     component={Contact} />
                   <Route exact path="/ranking"     component={Rankings} />
                   {/**<Route exact path="/register"    component={Register} /> */}
                   <Route exact path="/inscription" component={Inscription} />
                   <Route exact path="/login"       component={Login} />
                    {/** <Route exact path="/profile"     component={Profile} /> */}   
                   <Route exact path="/date"        component={Daterr} />
                   <PrivateRoute  exact path="/cv"  component={CreateCV} />
                   <Route path="/categorie/:id"     render={(props)=> <Posts{...props}  />}></Route>
                    {/*props: params,history... : params pour recuperer id 1*/}

               </Switch>
           </BrowserRouter>
       </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
