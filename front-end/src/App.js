import logo from './logo.svg';
import './App.css';
import HeaderC from './components/componentsTemplates/Header';
import ContainerC from './components/componentsTemplates/ContainerC';
import Footer from './components/componentsTemplates/FooterC';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Feed from "./pages/Feed"
import Header from "./components/componentsTemplates/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getcategories, loadEmployer, loadUser} from "./actions/authActions";
function App() {
    const auth = useSelector(state => state.auth)
    //const categories = useSelector(state => state.auth.categories)
    const dispatch=useDispatch()
    useEffect(()=>{
        //dispatch(getcategories())
       // console.log("Cat ===>",categories)
        if ( auth.connectedAs==="Candidate") {
            dispatch(loadUser())
        }else {
           // dispatch(loadEmployer())
            console.log("null")
        }

    },[]);
    return (
      <>
          {/* Fixed Pages*/}
           <ContainerC/>
           <Footer/>
          </>
    );
  }

  export default App;
