import React from 'react'

const Testimonials = () => {
    return (
        <div className="testimonals container-fluid ">
            <div>Testimonals:</div>
            <div className="row mb-1">
                <div id="testimonal-box" className= "col-5 m-3">
                    <div className="row">
                        <div className="col-2">
                         {/* image */}
                        </div>
                        <div className="col-10 justify-content-left">
                            <div id="testimonal-name">Name</div>
                            <div id="testimonal-company">Post @ Company</div>
                            <div id= "testimonal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam.</div>
                        </div>
                    </div>
                </div>
                <div id="testimonal-box" className= "col-5 m-3">
                    <div className="row">
                    <div className="col-2">
                         {/* image */}
                        </div>
                        <div className="col-10 justify-content-left">
                            <div id="testimonal-name">Name</div>
                            <div id="testimonal-company">Post @ Company</div>
                            <div id= "testimonal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
