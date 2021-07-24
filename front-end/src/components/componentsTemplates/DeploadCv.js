import React from 'react'
import {Link} from "react-router-dom";

const DeploadCv = () => {
    return (
        <div>
            <div>

<div className="online-cv cv-bg section-overly pt-90 pb-120"


     style={{
         backgroundImage: `url("assets/img/gallery/cv_bg.jpg")`
     }}
     // data-background="assets/img/gallery/cv_bg.jpg"

>



   <div className="container">
       <div className="row justify-content-center">
           <div className="col-xl-10">
               <div className="cv-caption text-center">
                   <p className="pera1">FEATURED TOURS Packages</p>
                   <p className="pera2"> Make a Difference with Your Online Resume!</p>
                   <Link to="/uploadCv"> <a href="#" className="border-btn2 border-btn4">Upload your cv</a></Link>

               </div>
           </div>
       </div>
   </div>
</div>

</div>
        </div>
    )
}

export default DeploadCv
