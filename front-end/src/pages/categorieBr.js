import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getcategories, loadEmployer, loadUser} from "../actions/authActions";
import {Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

const Categorie = () => {



    // const auth = useSelector(state => state.auth)
    const cat = useSelector(state => state.auth.categories)
    //const isLoading = useSelector(state => state.usersReducer.isLoading)
    const isLoading=useSelector(state=> state.auth.isLoading)
    console.log("cat :",cat," and cat type is:",typeof (cat))
    console.log("isLoading",isLoading)
    const dispatch=useDispatch()


    /* Use Effect Bloc Start */
    useEffect(()=>{
        dispatch(getcategories())

    },[dispatch]);



    /* Use Effect Bloc End */
    return (
        <div>
            <div>

                <div className="our-services section-pad-t30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle text-center">
                                    <span>FEATURED TOURS Packages</span>
                                    <h2>Browse Top Categories </h2>
                                </div>
                            </div>
                        </div>
                        { isLoading ? console.log("Attends svp "): console.log("Get data with success ! ",cat?.description)}
                        {/* { isLoading ? console.log("Attends svp "): console.log("Get data with success ! ",cat.map(el=>el.description))}*/}
                        {/*  { isLoading ? console.log("Attends svp "):*/}


                        {/*      cat.map(el=><h1>{el.description}</h1>)}*/}








                        {/*{*/}
                        {/*    isLoading ?  cat.map((el) => <h1>el.description</h1>*/}

                        {/*    ) : null*/}

                        {/*}*/}





                        <div className="row d-flex justify-contnet-center">


                            {  !isLoading && cat && cat.map(el=>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-services text-center mb-30">
                                        <div className="services-ion">
                                            <span className="flaticon-tour"></span>
                                        </div>
                                        <div className="services-cap">
                                            <h5>
                                                <Link to={`/categorie/${el._id}`}>{el.description}</Link>
                                                /* Get Categorie by id */
                                                {/*<Link to={`/categorie/${el._id}`}>{el.description}</Link>*/}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>







                        <div className="row">
                            <div className="col-lg-12">
                                <div className="browse-btn2 text-center mt-50">
                                    <a href="job_listing.html" className="border-btn2">Browse All Sectors</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categorie
