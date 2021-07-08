import React from 'react'
import Button from 'react-bootstrap/Button'
import NavbarBrand from '../components/navbarBrand';
import Dropdown from 'react-bootstrap/Dropdown'

const InterviewWithMentor = () => {
    return (
        <div className="pt-2 pl-5 pr-5 pb-2" >
            <NavbarBrand/>
            <div className= "heading-starting" style={{"color":"black", "font":"Poppins"}}>
            Practice Interviews with Industry Experts
            </div>
            <div style={{paddingLeft:"10px"}}>
            Mock Interviews with Mentor 
            </div>
            <div style={{paddingLeft:"10px", fontWeight:"bold", paddingTop:"10px"}}>
            Our Mentor Network:
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-4" >
                        <div id="dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{"white-space": "nowrap", "minWidth": "120px"}}>
                                All
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        <div id="dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{"white-space": "nowrap", "minWidth": "120px"}}>
                                Company
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        <div id="dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{"white-space": "nowrap", "minWidth": "120px"}}>
                                Role
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        <div id="dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{"white-space": "nowrap", "minWidth": "120px"}}>
                                Domain
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-6" style={{"textAlign":"center"}}>
                                    <div id="card"  >
                                        <div className="p-1">
                                            {/* image */}
                                        </div>
                                        <div className="p-1" style={{"fontWeight":"bold"}}>
                                            Name
                                        </div>
                                        <div className ="p-1" style={{color:"#808080"}}>
                                            <div>pm @ google</div>
                                            <div>17 year Exp.</div>
                                            <div>Rating 4.5/5</div>
                                            <div>25 sessions token</div>
                                            <div>Rs. 1800/session</div>
                                        </div>
                                    </div>
                                    <div  className="btn sm p-2" >
                                    <Button id="btn-practice" style={{"padding": "3px 10px"}} >Book</Button>
                                    </div>
                                    <div id="card"  >
                                        <div className="p-1">
                                            {/* image */}
                                        </div>
                                        <div className="p-1" style={{"fontWeight":"bold"}}>
                                            Name
                                        </div>
                                        <div className ="p-1" style={{color:"#808080"}}>
                                            <div>pm @ google</div>
                                            <div>17 year Exp.</div>
                                            <div>Rating 4.5/5</div>
                                            <div>25 sessions token</div>
                                            <div>Rs. 1800/session</div>
                                        </div>
                                    </div>
                                    <div  className="btn sm p-2" >
                                    <Button id="btn-practice" style={{"padding": "3px 10px"}} >Book</Button>
                                    </div>
                                </div>
                                <div className="col-6" style={{"textAlign":"center"}}>
                                <div id="card"  >
                                        <div className="p-1">
                                            {/* image */}
                                        </div>
                                        <div className="p-1" style={{"fontWeight":"bold"}}>
                                            Name
                                        </div>
                                        <div className ="p-1" style={{color:"#808080"}}>
                                            <div>pm @ google</div>
                                            <div>17 year Exp.</div>
                                            <div>Rating 4.5/5</div>
                                            <div>25 sessions token</div>
                                            <div>Rs. 1800/session</div>
                                        </div>
                                    </div>
                                    <div  className="btn sm p-2" >
                                    <Button id="btn-practice" style={{"padding": "3px 10px"}} >Book</Button>
                                    </div>
                                    <div className="pt-5" >
                                    <a  href="url">VIEW ALL MENTORS</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                <img 
                    id="img-mentor"
                    src="https://s3-alpha-sig.figma.com/img/8af9/c8c4/967f2b8a96ea95c3e3fe772af51376aa?Expires=1626652800&Signature=d3FPI4ApOUieNLs3oTx3v1mPO6PMdLkOe4SkeE1LDJx9gkSp9c5cMeaxzJOisZag~6Oxa2FoP3qYDV6dN1spxIMv4Vpif2rn7gyTZ71Ejo3-WPQAItoda97WiAOdDYnqAx8W8oFC-IG6KRqLaCw8uWYebFeo2c3S7pLuiguivfItMyyzavNf7H29f6jVn0~lT3UZYPqKE9DkQCvsuxXNg0aDa5mfA4JJ-U5Bscrgny3gQhHJ8xnTcVjs9p10QOPfWCX1EBwMJo57Rca668VfAOoQxk3uXQvGnlMRvfGZlghNvyI~BpGw8aqgMEu6iqodzGmJ643pqoRxPK6HZX9sUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="interview with mentor image"
                    />
                </div>
            </div>
        </div>
    )
}

export default InterviewWithMentor
