import React, {useEffect, useState} from 'react'
import {Container, Row} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../actions/authActions";

// Sates declarations :
const Register = ({history}) => {
    const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState(null)
    const auth = useSelector(state => state.auth)
    // Rester a l'ecoute si auth.isAuth est updated or not !
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
    // const errors=useSelector(state=>state.auth.errors)
    const dispatch = useDispatch()
    const registerNow = (e) => {
        e.preventDefault() //utiliser avec le form et pour eviter le chargement de page
        dispatch(registerUser(info))

    }
    const handlechange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <div>
                <Container style={{width: '800px', marginTop: '80px', xmarginTop: '100px', background: '#e8e8e4'}}>
                    <Row>
                        <div className="w3-container">   {/* w3-blue*/}
                            <h2></h2>
                        </div>
                        <form onSubmit={registerNow} className="w3-container w3-card-4" >
                            <br></br><br></br>
                            {/*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*/}
                            {errors && errors.map(el => <span style={{color: 'red'}}> {el.msg}</span>)}
                            <br></br>
                            <br></br>
                            Enter your information here &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span
                            style={{color: 'red'}}> (*) </span> <b>Required</b> <br></br><br></br><br></br>
                            <label className="w3-text-blue">First Name <span
                                style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp; &nbsp;  </label>
                            <input  onFocus={()=>setErrors(null)}    required name="firstname" required type="text" className="form-control "
                                   id="exampleinput  onFocus={()=>setErrors(null)} Email1" aria-describedby="emailHelp" placeholder="Enter First name"
                                   onChange={handlechange}/><br></br>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                            <label className="w3-text-blue">Last Name <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input  onFocus={()=>setErrors(null)}  name="lastname" required type="text" className="form-control" id="exampleinput  onFocus={()=>setErrors(null)} Email"
                                   placeholder="Enter Last name" onChange={handlechange}/> <br></br>
                            <label className="w3-text-blue">Email <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  onFocus={()=>setErrors(null)}  name="email" required type="email" className="form-control" id="myH1"
                                   placeholder="Enter your email" onChange={handlechange}/><br></br>
                            <label className="w3-text-blue">Password <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input  onFocus={()=>setErrors(null)}  name="password" required type="password" className="form-control"
                                   id="exampleinput  onFocus={()=>setErrors(null)} Email1" placeholder="Enter password"
                                   onChange={handlechange}/><br></br>
                            <label className="w3-text-blue">Phone <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  onFocus={()=>setErrors(null)}  name="phone" required type="text" className="form-control" id="exampleinput  onFocus={()=>setErrors(null)} Email1"
                                   placeholder="Enter your phone number" onChange={handlechange}/><br></br>
                            <button className="custom-btn btn-1">Save now</button>
                            <br></br>
                            <br></br>
                            <br></br>
                        </form>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Register
