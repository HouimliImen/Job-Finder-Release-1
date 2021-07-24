import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap';
import '../../css/header.css';
// import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'


import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "../../pages/Login";
import Preloader from "./Preloader";
import Feed from "../../pages/Feed";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../actions/authActions";

const Header2 = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const auth = useSelector(state => state.auth)
    return (
        <div>
            {/*preloader start */}
            <Preloader/>
            {/*preloader end */}
            <header>
                <div>
                    {/*// <!-- Navbar -->*/}
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        {/*// <!-- Container wrapper -->*/}
                        <div class="container-fluid">
                            {/*// <!-- Toggle button -->*/}
                            {/*// <!-- Collapsible wrapper -->*/}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                {/*// <!-- Navbar brand -->*/}
                                <div className="col-lg-3 col-md-2">
                                     {/* Logo */}
                                    <div className="logo">
                                        <a href="index.html"/>
                                        <img src="assets/img/logo/logo.png" alt=""/>
                                    </div>
                                </div>
                                {/*   -------------------------------------------- Home  Routes Start --------------------------------------------- */}

                                   {/*<Router>*/}
                                   <div className="col-lg-9 col-md-9">
                  <div className="menu-wrapper">
                    {/* Main-menu */}
                    <div className="main-menu">
                      <nav className="d-none d-lg-block">
                        <ul id="navigation">
                        <Link to="/"><a href="#"  className="btn head-btn1">Offres</a></Link>
                        <Link to="/cv"><a href="#"  className="btn head-btn1">CreateCV</a></Link>
                        <Link to="/ranking"><a href="#"  className="btn head-btn1">Ranking</a></Link>
                          <li>
                              <a href="#">Page</a>
                            <ul className="submenu">
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="single-blog.html">Blog Details</a></li>
                              <li><a href="elements.html">Elements</a></li>
                              <li><a href="job_details.html">job Details</a></li>
                            </ul>
                          </li>

  {/*///////////////////// Route condionnel Start (user connecté ou nn !:) ) ////////////////*/}
                                                    
                                                        {auth.isAuth ? (
                                                            <>
                                                                {/*<Link to="/profile"><a href="#"*/}
                                                                {/*                       className="btn head-btn1">Profile</a></Link>*/}
                                                                <Link onClick={() => dispatch(logoutUser())}>Log out<a href="#" className="btn head-btn1"></a></Link>

                                                                {/*<Link onClick={() => dispatch(logoutUser())}>Log out</Link>*/}
                                                            </>
                                                        ) : (
                                                            <>
                                                                {/*<Link to="/register"><a href="#"*/}
                                                                {/*                        className="btn head-btn1">Register</a></Link>*/}
                                                                <Link to="/inscription"><a href="#"
                                                                                           className="btn head-btn1">Register</a></Link>
                                                                {/*<Link to={`/inscription/${id}`}><a href="#"*/}
                                                                {/*                           className="btn head-btn1">Register</a></Link>*/}

                                                                <Link to="/login"><a href="#"
                                                                                     className="btn head-btn1">Login</a></Link>
                                                                {/*<Link to="/profile">*/}
                                                                {/*    <a href="#"*/}
                                                                {/*                       className="btn head-btn1">Profile</a></Link>*/}
                                                            </>
                                                        )
                                                        }
                                                   
                                                    {/*///////////////////// Route condionnel End (id user connecté ou nn !:) ) ////////////////*/}
                                              
                                               
                        </ul>
                      </nav>
                    </div>          
                    {/* Header-btn */}
                   
                    </div>
                                </div>

                                {/* Mobile Menu */}
                                <div className="col-12">
                                                <div className="mobile_menu d-block d-lg-none" />
                                                </div>
                                {/*   -------------------------------------------- Home  Routes End --------------------------------------------- */}
                            </div>
                            {/*// <!-- Collapsible wrapper -->*/}
                            {/*// <!-- Right elements -->*/}
                            <div class="d-flex align-items-center">
                                {/*// <!-- Icon -->*/}
                                {/*// <!-- Notifications -->*/}
                                { auth.isAuth && <a
                                    class="text-reset me-3 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="fas fa-bell"></i>
                                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>}


                                {/*// <!-- Avatar -->*/}
                                { auth.isAuth &&

                                    <a
                                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                    >
                                       <div><img style={{'marginLeft':'10px','width':'15px'}} src={"/assets/img/logo/online.svg"}/></div>
                                        <Link to="/profile">
                                        <img style={{boxShadow: '0 0 98px 6px rgba(0, 0, 0, 0.2)', borderRadius: '50%', width:'30px', height:'40px'
                                        }} src={auth.user.selectedFile} className="rounded-circle" height="20" alt="" loading="lazy"/>
                                    </Link>
                                </a>
                                }
                            </div>
                            {/*// <!-- Right elements -->*/}
                        </div>
                        {/*// <!-- Container wrapper -->*/}
                    </nav>
                    {/*// <!-- Navbar -->*/}
                </div>

                        
                
            </header>
        </div>
    )
}

export default Header2
