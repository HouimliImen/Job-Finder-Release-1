//import jsPDF from 'jspdf';
import './date.css'
import React, {useEffect, useState} from 'react'
import '../css/login.css'
import {loginUser} from "../actions/authActions";
import {useDispatch, useSelector} from "react-redux";




function Daterr({history}) {

    // const [value, setValue] = useState(new Date());
    // const date=value.toDateString()
    // console.log("date",date)

    // const saveAspdf=()=>{
    //     var doc = new jsPDF();
    //     doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
    //     doc.save("myDocument.pdf");
    // }
    const dispatch = useDispatch()
    const [info, setInfo] = useState({
        email: "",
        password: "",

    })
    const [errors, setErrors] = useState(null)

    const auth = useSelector(state => state.auth)
    //const errors=useSelector(state=>state.auth.errors)

    useEffect(() => {
        if (auth.isAuth) {
            history.push("/")
        }
        if (auth.errors) {
            setErrors(auth.errors)
            // setTimeout(()=>{
            //     setErrors(null)
            // },5000)
        }

    }, [auth.isAuth, auth.errors])
    const Login = e => {
        e.preventDefault()
        dispatch(loginUser(info))
    }
    const handlechange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }




    return (
        <div>
            <div>




























                {/*<div id="logo">*/}
                {/*    <h1><i> Welcome to Job Finder </i></h1>*/}
                {/*</div>*/}
                {/*<section className="stark-login">*/}

                {/*        /!*<div id="fade-box">*!/*/}
                {/*            <form  onSubmit={Login}>*/}
                {/*                /!*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*!/*/}
                {/*                {errors && errors.map(el=> <span  style={{color:'red'}}      > {el.msg}</span>)}*/}
                {/*                /!*<div className="valid-feedback">Valid.</div>*!/*/}
                {/*                /!* <div className="invalid-feedback">Please fill out this field.</div>*!/*/}
                {/*                <label>Email <span style={{color:'red'}}>*</span> </label>*/}
                {/*                <input   onFocus={()=>setErrors(null)}     name="email" required type="email" className="form-control" id="exampleInputEmail1"           onChange={handlechange}/>*/}
                {/*                &nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*                <br></br>*/}
                {/*                <label>Password <span style={{color:'red'}}>*</span> </label>*/}
                {/*                <input  onFocus={()=>setErrors(null)}  name="password" required type="password" className="form-control" id="exampleInputEmail1"     onChange={handlechange}/><br></br>*/}
                {/*                <button type="submit" className="custom-btn btn-1">Save now</button> <br></br> <br></br> <br></br>*/}
                {/*                Not a member?*/}
                {/*                <Link style={{textDecoration: 'none'}}to="/register">*/}
                {/*                    <button className="custom-btn btn-4">*/}
                {/*                        &nbsp;&nbsp;Register now</button></Link>*/}

                {/*            </form>*/}

                {/*        /!*</div>*!/*/}
                {/*    /!*<div className="hexagons">*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <span>&#x2B22;</span>*!/*/}
                {/*    /!*    <br/>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <span>&#x2B22;</span>*!/*/}
                {/*    /!*        <br/>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}
                {/*    /!*            <span>&#x2B22;</span>*!/*/}

                {/*    /!*            <br/>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <span>&#x2B22;</span>*!/*/}
                {/*    /!*                <br/>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*                    <span>&#x2B22;</span>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</section>*/}

                {/*<div id="circle1">*/}
                {/*    <div id="inner-cirlce1">*/}
                {/*        <h2></h2>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*<ul>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*</ul>*/}


            </div>
        </div>
    );
}

export default Daterr;
