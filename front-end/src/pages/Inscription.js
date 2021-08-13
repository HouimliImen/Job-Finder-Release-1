import React, {useEffect, useRef, useState} from 'react'
import {Container, Row} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerUser, registerEmployer, loadUser} from "../actions/authActions";
import FileBase from 'react-file-base64';
import moment from 'moment';


// Sates declarations :
const Inscription = ({history}) => {

    const [employer, setEmployer] = useState(false)
    const [candidate, setCandidat] = useState(false)
    const [selectedd, setSelectedd] = useState(true)
   /* const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        phone: "",:,:
        email: "",
        password: "",
        datebirth:'',
        connectedAs:'Candidate'
    })*/
    const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        companyname: "",
        website: "",
        selectedFile: '',
        connectedAs:'',
        datebirth:'',
    })
    /* state error*/
    const [errors, setErrors] = useState(null)
    const auth = useSelector(state => state.auth)
    // Rester a l'ecoute si auth.isAuth est updated or not !

    useEffect(() => {
        if (auth.isAuth) {
            dispatch(loadUser())
            history.push("/")
        }
        if (auth.errors) {
            setErrors(auth.errors)
            // setTimeout(()=>{
            //     setErrors(null)
            // },5000)
        }
    }, [auth.isAuth, auth.errors])
    const dispatch = useDispatch()
    const phone = useRef()
    /////// Employer Form Action dispatch
    const registerEmp = (e) => {
      //  e.preventDefault() //utiliser avec le form et pour eviter le chargement de page par le navigateur
      //  dispatch(registerEmployer(info))
    }
    const [value, setValue] = useState();
    /*
Get date from datePicker start
*/
   /* var momentObj = moment(value, 'MM-DD-YYYY');
    var momentString = momentObj.format('YYYY-MM-DD').split("T00"); // 2016-07-15
    console.log("date", momentString)*/
    const registerNow = (e) => {
        e.preventDefault() //utiliser avec le form et pour eviter le chargement de page
        dispatch(registerUser(info))
    }
    /*
Get date from datePicker end
*/
    //handlechangeemp
    /*const handlechangeemp = (e) => {
        setInfoemp({...infoemp, [e.target.name]: e.target.value})

    }*/
    const handlechange = (e) => {
        if (e.target.name === 'phone') {
            (+e.target.value) !== NaN &&
            setInfo({...info, [e.target.name]: e.target.value})
            console.log(+e.target.value)
        } else
            setInfo({...info, [e.target.name]: e.target.value})
    }
    const handlechangeSelect = (e) => {
        //  console.log(e.target.value)
        let connectedAs = e.target.value
        setInfo({...info,connectedAs:connectedAs})
        console.log("connectedAs ", connectedAs)
        if (connectedAs === "Employer") {
            // console.log("vous ete demande l'inscrit comme Employer !")
            setEmployer(true)
            setCandidat(false)
            setSelectedd(false)
        } else {
            setCandidat(true)
            setEmployer(false)
            setSelectedd(false)
            // console.log("vous ete demande l'inscrit comme Candidat !")
        }
    }
    return (
        <div>
            <Container>
                <Row style={{boxShadow: '0 0 98px 6px rgba(0, 0, 0, 0.2)'}}>
                    {selectedd && <form style={{  width: "672px", display: 'block', margin: '0 auto' }} className="form-signin">
                        <h2 className="form-signin-heading">Registration</h2>
                        <div className="form-group">
                            <h5 style={{color: "#0f6674"}}>Registration As long as</h5>
                            <select onChange={handlechangeSelect} className="form-select form-select-lg mb-3"
                                    aria-label=".form-select-lg example">
                                <option selected>Choose the type of account</option>
                                <option     value="Employer">Employer</option>
                                <option     value="Candidate">Candidate</option>
                            </select>
                        </div>
                    </form>}
                </Row>
            </Container>
            <Container style={{width: '800px', marginTop: '100px', background: '#e8e8e4'}}>

                {/*---------------------  Candidate  form Start ---------------*/}

                {candidate && <Row>
                    <div className="w3-container">
                    </div>
                    <form  onSubmit={registerNow}   style={{boxShadow: '0 0 98px 6px rgba(0, 0, 0, 0.2)'}}  className="w3-container w3-card-4">
                        <br></br><br></br>
                        {errors && errors.map(el => <span style={{color: 'red'}}> {el.msg}</span>)}
                        <br></br>
                        <br></br>
                        Enter your information here (Candidate Space) &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span
                        style={{color: 'red'}}> (*) </span> <b>Required</b> <br></br><br></br><br></br>
                        <label className="w3-text-blue">Enter your birthday<span
                            style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp;&nbsp;  </label>
                        <input onFocus={() => setErrors(null)} value={info.datebirth} required name="datebirth" required
                               type="date"
                               className="form-control"
                               id="exampleinput" aria-describedby="emailHelp"
                               placeholder="Enter First name"
                               onChange={handlechange}/><br></br>
                        <br></br>
                        <br></br>
                        <label className="w3-text-blue">First Name <span
                            style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp;&nbsp;  </label>
                        <input onFocus={() => setErrors(null)} value={info.firstname} required name="firstname" required
                               type="text"
                               className="form-control "
                               id="exampleinput  onFocus={()=>setErrors(null)} Email1" aria-describedby="emailHelp"
                               placeholder="Enter First name"
                               onChange={handlechange}/><br></br>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                        <label className="w3-text-blue">Last Name <span
                            style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                        <input onFocus={() => setErrors(null)} value={info.lastname} name="lastname" required
                               type="text"
                               className="form-control" id="exampleinput  onFocus={()=>setErrors(null)} Email"
                               placeholder="Enter Last name" onChange={handlechange}/> <br></br>
                        <label className="w3-text-blue">Email <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                        </label>
                        <input onFocus={() => setErrors(null)} value={info.email} name="email" required type="email"
                               className="form-control" id="myH1"
                               placeholder="Enter your email" onChange={handlechange}/><br></br>
                        <label className="w3-text-blue">Password <span
                            style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                        <input onFocus={() => setErrors(null)} value={info.password} name="password" required
                               type="password"
                               className="form-control"
                               id="exampleinput  onFocus={()=>setErrors(null)} Email1" placeholder="Enter password"
                               onChange={handlechange}/><br></br>
                        <label className="w3-text-blue">Phone <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                        </label>
                        <input onFocus={() => setErrors(null)} ref={phone} name="phone" required type="tel"
                               className="form-control" id="exampleinput  onFocus={()=>setErrors(null)} Email1"
                               placeholder="Enter your phone number" value={info.phone}
                               onChange={handlechange}/><br></br>
                        <FileBase type="file" multiple={false} onDone={({base64}) => setInfo({...info, selectedFile: base64})}></FileBase>
                        <button className="custom-btn btn-1">Save now</button>
                        <br></br><br></br><br></br>
                    </form>
                </Row>}
                {/*--------------------------------Candidate  form End------------------------ */}
                {/*--------------------------------Employer Form Start  -----------------------*/}
                {employer && <Row>
                    <div className="w3-container">
                    </div>
                    <form style={{boxShadow: '0 0 50px 6px rgba(1, 0, 0, 0.2)'}} onSubmit={registerNow} className="w3-container w3-card-4">
                        <br></br><br></br>
                        {/*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*/}
                        {errors && errors.map(el => <span style={{color: 'red'}}> {el.msg}</span>)}
                        <br></br>
                        <br></br>
                        Enter your information here (Employer space ) &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span
                        style={{color: 'red'}}> (*) </span> <b>Required</b> <br></br><br></br><br></br>
                        <label className="w3-text-blue">First Name <span
                            style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp; &nbsp;  </label>
                        <input required name="firstname" required type="text" className="form-control "
                               aria-describedby="emailHelp"
                               placeholder="Enter First name" onChange={handlechange}/><br></br>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>

                        <label className="w3-text-blue">Last Name <span
                            style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                        <input name="lastname" required type="text"
                               className="form-control" placeholder="Enter Last name" onChange={handlechange}/>
                        <br></br>
                        <label className="w3-text-blue">Email <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                        </label>
                        <input name="email" required type="email"
                               className="form-control"
                               placeholder="Enter your email" onChange={handlechange}/><br></br>
                        <label className="w3-text-blue">Password <span
                            style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                        <input name="password" required type="password"
                               className="form-control"
                               placeholder="Enter password"
                               onChange={handlechange}/><br></br>

                        <label className="w3-text-blue">Phone <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                        </label>
                        <input name="phone" required type="text"
                               className="form-control" placeholder="Enter your phone number"
                               onChange={handlechange}/><br></br>
                        <label className="w3-text-blue">Company Name <span
                            style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                        </label>
                        <input name="companyname" required type="text"
                               className="form-control" placeholder="Enter company name"
                               onChange={handlechange}/><br></br>
                        <label className="w3-text-blue">website <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                        </label>
                        <input name="website" required type="text"
                               className="form-control" placeholder="Enter website"
                               onChange={handlechange}/><br></br>
                        <FileBase type="file" multiple={false} onDone={({base64}) => setInfo({...info, selectedFile: base64})}

                        />
                        <button className="custom-btn btn-1">Save now</button>
                        <br></br>
                        <br></br>
                        <br></br>
                    </form>
                </Row>}
                {/*----------------------------------------Employer form End ------------------------------*/}
            </Container>

        </div>
    )
}

export default Inscription
