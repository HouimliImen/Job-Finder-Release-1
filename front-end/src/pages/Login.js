import React, {useEffect, useState} from 'react'
import {Alert, Button, Form} from 'react-bootstrap';
import '../css/login.css'
import {Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {loadUser, loginUser} from "../actions/authActions";
import {useDispatch, useSelector} from "react-redux";

const Login = ({history}) => {
   const dispatch= useDispatch()
    const [info, setInfo] = useState({
        email:"",
        password:"",

    })
    const [errors, setErrors] = useState(null)

    const auth=useSelector(state=>state.auth)
    //const errors=useSelector(state=>state.auth.errors)

    useEffect(()=>{
        if (auth.isAuth){
            dispatch(loadUser())
           history.push("/")
            console.log(" redirection------------------->")
        }
        if (auth.errors){
            setErrors(auth.errors)
            // setTimeout(()=>{
            //     setErrors(null)
            // },5000)
        }

    },[auth.isAuth,auth.errors])
    const Login=e=>{
       console.log("Info for login" ,info)
         e.preventDefault()
        dispatch(loginUser(info))
    }
    const  handlechange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <div>
                <Container  style={{width:'800px',marginTop:'80px',xmarginTop:'100px',background:'#e8e8e4'}}>
                    <Row>
                        <form    style={{boxShadow: '0 0 98px 6px rgba(0, 0, 0, 0.2)',

                        }}onSubmit={Login}>
                            <br></br><br></br>
                            {errors && errors.map(el=> <span  style={{color:'red'}}> {el.msg}</span>)}
                            <br></br><br></br>
                            <label>Email <span style={{color:'red'}}>*</span> </label>
                            <input   onFocus={()=>setErrors(null)}     name="email" required type="email" className="form-control" id="exampleInputEmail1"           onChange={handlechange}/>
                            &nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                            <label>Password <span style={{color:'red'}}>*</span> </label>
                            <input  onFocus={()=>setErrors(null)}  name="password" required type="password" className="form-control" id="exampleInputEmail1"     onChange={handlechange}/><br></br>
                             <button type="submit" className="custom-btn btn-1">Login</button> <br></br> <br></br> <br></br>
                            Not a member? <br></br><br></br>
                            <Link style={{textDecoration: 'none'}}to="/inscription">
                                <button className="custom-btn btn-4">
                                    &nbsp;&nbsp;Register now</button></Link>
                            <br></br><br></br><br></br>
                        </form>
                    </Row >
                </Container>
            </div>
        </div>
    )
}
export default Login
