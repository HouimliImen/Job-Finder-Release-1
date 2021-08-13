import './App.css';
import ContainerC from './components/componentsTemplates/ContainerC';
import Footer from './components/componentsTemplates/FooterC';

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUser} from "./actions/authActions";
function App() {
    const auth = useSelector(state => state.auth)
    //const categories = useSelector(state => state.auth.categories)
    const dispatch=useDispatch()
    useEffect(()=>{
        //dispatch(getcategories())
       // console.log("Cat ===>",categories)
        if ( auth.isAuth) {
            dispatch(loadUser())
        }else {
           // dispatch(loadEmployer())
            console.log("null")
        }

    },[auth.isAuth]);
    return (
      <>
          {/* Fixed Pages*/}
           <ContainerC/>
           <Footer/>
          </>
    );
  }

  export default App;
