import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAllcategories} from "../actions/categorieAction";

const Categorie = () => {



    const cat = useSelector(state => state.catR.categories)
    const isLoading=useSelector(state=> state.catR.isLoading)
    console.log("cat :",cat," and cat type is:",typeof (cat))
    console.log("isLoading",isLoading)
    const dispatch=useDispatch()


    /* Use Effect Bloc Start */
    useEffect(()=>{
        dispatch(getAllcategories())
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
       <div className="row d-flex justify-contnet-center">
            {  !isLoading && cat && cat.map(el=>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                    {/** <div className="services-ion">
                        <span className="flaticon-tour"></span>
                    </div>*/}
                    
                    <div className="services-cap">
                        <Link to={`/categorie/${el._id}`}>{el.description}</Link>

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
