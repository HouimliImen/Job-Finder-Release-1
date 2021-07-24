import React from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap'


const SliderArea = () => {
    return (
        <div>
<div>
    <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center"

                style={{
                    backgroundImage: `url("assets/img/hero/c.jpg")`
                  }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-9 col-md-10">
                                <div className="hero__caption">
                                    <h1>Find the most exciting startup jobs</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <form action="#" className="search-box">
                                    <div className="input-form">
                                        <input type="text" placeholder="Job Tittle or keyword"/>
                                    </div>
                                    <div className="select-form">
                                        <div  style={{marginTop: '18px',
                                                     marginLeft: '27px'}}className="select-itms">
                                           {/* <select name="select" id="select1">
                                                <option value="">Location BD</option>
                                                <option value="">Location PK</option>
                                                <option value="">Location US</option>
                                                <option value="">Location UK</option>
                                            </select>*/}
                                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>

                                        </div>
                                    </div>
                                    <div className="search-form">
                                        <a href="#">Find job</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>


        </div>
    )
}

export default SliderArea
