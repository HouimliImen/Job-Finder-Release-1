import React, {useEffect, useState} from 'react'
import {Container,Row} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../actions/authActions";
import {Alert} from "react-bootstrap";


// class  Register extends React.Component{}
// Sates declarations :
const Register = ({history}) => {
    const [info, setInfo] = useState({
        firstname:"",
        lastname:"",
        phone:"",
        email:"",
        password:"",

    })
    const [errors, setErrors] = useState(null)

    const auth=useSelector(state=>state.auth)
    useEffect(()=>{
        if (auth.isAuth){
            history.push("/")
        }
        if (auth.errors){
            setErrors(auth.errors)
            // setTimeout(()=>{
            //     setErrors(null)
            // },5000)
        }

    },[auth.isAuth,auth.errors])
    // const errors=useSelector(state=>state.auth.errors)
    const dispatch=useDispatch()
    const registerNow=(e)=>{
        e.preventDefault() //utiliser avec le form et pour eviter le chargement de page
        dispatch(registerUser(info))
        setInfo({
            firstname:"",
            lastname:"",
            phone:"",
            email:"",
            password:"",
        })
        // props.redirectToHome(this.props.history)


    }

    const  handlechange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    // if (errors){
    //     document.getElementById("myH1").style.color = "red";
    //
    // }

    return (
        <div>
            <div>
                {/*<form className="w3-container w3-card-4" action="/action_page.php">*/}
                {/*    <h2 className="w3-text-blue">Input Form</h2>*/}
                {/*    <p>Use any of the w3-text-color classes to color your labels.</p>*/}
                {/*    <p>*/}
                {/*        <label className="w3-text-blue"><b>First Name</b></label>*/}
                {/*        <input className="w3-input w3-border" name="first" type="text"/></p>*/}
                {/*    <p>*/}
                {/*        <label className="w3-text-blue"><b>Last Name</b></label>*/}
                {/*        <input className="w3-input w3-border" name="last" type="text"/></p>*/}
                {/*    <p>*/}
                {/*        <button className="w3-btn w3-blue">Register</button>*/}
                {/*    </p>*/}
                {/*</form>*/}
                <Container style={{width:'800px',marginTop:'80px',xmarginTop:'100px',background:'#e8e8e4'}}>
                    <Row>
                        <div className="w3-container">   {/* w3-blue*/}
                            <h2></h2>
                        </div>

                        {/*<form className="w3-container">*/}
                        {/*    <p>*/}
                        {/*        <label>First Name</label>*/}
                        {/*        <input className="w3-input" type="text"/></p>*/}
                        {/*    <p>*/}
                        {/*        <label>Last Name</label>*/}
                        {/*        <input className="w3-input" type="text"/></p>*/}
                        {/*    <p>*/}
                        {/*        <label>Email</label>*/}
                        {/*        <input className="w3-input" type="text"/></p>*/}
                        {/*</form>*/}
                        <form className="w3-container w3-card-4" onSubmit={registerNow} >
                            {/*{ errors ?<div className="alert alert-primary" role="alert">*/}
                            {/*    This is a primary alert—check it out!*/}
                            {/*</div> : null}*/}<br></br><br></br>
                            {/*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*/}
                            {errors && errors.map(el=><span style={{color:'red'}}> {el.msg}</span>)}
                            <br></br>
                            <br></br>
                            Enter your information here &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span style={{color:'red'}}> (*) </span> <b>Required</b> <br></br><br></br><br></br>
                            <label className="w3-text-blue">First Name <span style={{color:'red'}}> * &nbsp; &nbsp;</span> &nbsp; &nbsp;  </label>
                            <input  required name="firstname" required type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First name" onChange={handlechange}/><br></br>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                            <label className="w3-text-blue">Last Name <span style={{color:'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input name="lastname" required type="text" className="form-control" id="exampleInputEmail"         placeholder="Enter Last name" onChange={handlechange}/> <br></br>
                            <label className="w3-text-blue">Email <span style={{color:'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input name="email" required type="email" className="form-control" id="myH1"          placeholder="Enter your email" onChange={handlechange}/><br></br>
                            <label className="w3-text-blue">Password <span style={{color:'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input name="password" required type="password" className="form-control" id="exampleInputEmail1"    placeholder="Enter password" onChange={handlechange}/><br></br>
                            <label className="w3-text-blue">Phone <span style={{color:'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input name="phone" required type="text" className="form-control" id="exampleInputEmail1"           placeholder="Enter your phone number"  onChange={handlechange}/><br></br>
                            <button className="custom-btn btn-1" >Save now</button>
                            <br></br>
                            <br></br>
                            <br></br>
                        </form>
                    </Row >
                </Container>

            </div>
        </div>
    )
}

export default Register
