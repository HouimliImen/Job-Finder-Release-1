import React from 'react'
import { DropdownButton, Dropdown} from 'react-bootstrap'
import DeploadCv from './DeploadCv';
import FeatureJob from './FeatureJob';
import OurService from "./OurService";
import TestimonialShareExperince from "./TestimonialShareExperince";
import SliderArea from "./SliderArea";
import SupportCompany from "./ SupportCompany";
import Categorie from "../../pages/Categorie";

const ContainerC = () => {
    return (
       <div>
       <main>


{/** Slide Start ! */}

<SliderArea></SliderArea>

{/** Slide End ! */}


{/** Ours Services Start ! */}
{/*     <OurService></OurService>*/}
 <Categorie></Categorie>
{/** Ours Services End ! */}

{/** Depload Cv start  ! */}
<DeploadCv></DeploadCv>

{/** Depload Cv End ! */}
{/** Featured_job Start ! */}
<FeatureJob></FeatureJob>
{/** Featured_job End   ! */}


{/** How  Apply Process  Start ! */}
{/*<div>*/}
{/*        <div className="apply-process-area apply-bg pt-150 pb-150" data-background="assets/img/gallery/how-applybg.png">*/}
{/*            <div className="container">*/}
{/*                <div className="row">*/}
{/*                    <div className="col-lg-12">*/}
{/*                        <div className="section-tittle white-text text-center">*/}
{/*                            <span>Apply process</span>*/}
{/*                            <h2> How it works</h2>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*                <div className="row">*/}
{/*                    <div className="col-lg-4 col-md-6">*/}
{/*                        <div className="single-process text-center mb-30">*/}
{/*                            <div className="process-ion">*/}
{/*                                <span className="flaticon-search"></span>*/}
{/*                            </div>*/}
{/*                            <div className="process-cap">*/}
{/*                               <h5>1. Search a job</h5>*/}
{/*                               <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                    <div className="col-lg-4 col-md-6">*/}
{/*                        <div className="single-process text-center mb-30">*/}
{/*                            <div className="process-ion">*/}
{/*                                <span className="flaticon-curriculum-vitae"></span>*/}
{/*                            </div>*/}
{/*                            <div className="process-cap">*/}
{/*                               <h5>2. Apply for job</h5>*/}
{/*                               <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                    <div className="col-lg-4 col-md-6">*/}
{/*                        <div className="single-process text-center mb-30">*/}
{/*                            <div className="process-ion">*/}
{/*                                <span className="flaticon-tour"></span>*/}
{/*                            </div>*/}
{/*                            <div className="process-cap">*/}
{/*                               <h5>3. Get your job</h5>*/}
{/*                               <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*             </div>*/}
{/*        </div>*/}




{/*</div>*/}
{/** How  Apply Process End ! */}

{/** Testimonial start ! */}
{/*           <TestimonialShareExperince></TestimonialShareExperince>*/}

 {/** Testimonial End ! */}

{/** Support company Start ! */}
{/*<SupportCompany/>*/}

{/** Support company End ! */}

</main>
</div>


    )
}

export default ContainerC
