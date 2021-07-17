import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import NavbarBrand from '../components/navbarBrand';
import Dropdown from 'react-bootstrap/Dropdown'
import image from '../assets/PM.jpg';
import Card from '../components/card';
import JSONDATA from '../assets/details.json'

const InterviewWithMentor = () => {
    const mentorList = JSONDATA;
    const [filterdMentorList, setFilterdMentorList] = React.useState(JSONDATA);
    let [company, setCompany] = React.useState([]);
    let [domain, setDomain] = React.useState([]);
    let [role, setRole] = React.useState([]);
    let [filteredCompany, setFilteredCompany] = React.useState();
    let [filteredDomain, setFilteredDomain] = React.useState();
    let [filteredRole, setFilteredRole] = React.useState();
    useEffect(() => {
        let companies = [];
        let domains = [];
        let roles = [];
        mentorList.map(each => {
            if (companies.indexOf(each.company) == -1) {
                companies.push(each.company);
            }
            if (domains.indexOf(each.domain) == -1) {
                domains.push(each.domain);
            }
            if (roles.indexOf(each.role) == -1) {
                roles.push(each.role);
            }
        });

        setCompany(companies);
        setDomain(domains);
        setRole(roles);
    }, [])
    
    const filterListForCompany = (value) => {
        let originalFilteredList = filteredCompany ? [...mentorList] : [...filterdMentorList];
        setFilteredCompany(value);
        let filteredList = originalFilteredList.filter(each => {
            return each.company == value && (!filteredDomain || filteredDomain == each.domain) && (!filteredRole || filteredRole == each.role);
        })
        setFilterdMentorList(filteredList);
    }

    const filterListForDomain = (value) => {
        let originalFilteredList = filteredDomain ? [...mentorList] : [...filterdMentorList];
        setFilteredDomain(value);
        let filteredList = originalFilteredList.filter(each => {
            return each.domain == value && (!filteredCompany || filteredCompany == each.company) && (!filteredRole || filteredRole == each.role);
        })
        setFilterdMentorList(filteredList);
    }

    const filterListForRole = (value) => {
        let originalFilteredList = filteredRole ? [...mentorList] : [...filterdMentorList];
        setFilteredRole(value);
        let filteredList = originalFilteredList.filter(each => {
            return each.role == value && (!filteredDomain || filteredDomain == each.domain) && (!filteredCompany || filteredCompany == each.company);
        })
        setFilterdMentorList(filteredList);
    }

    return (
        <div className="pt-2 pl-5 pr-5 pb-2" id="interview-with-mentor" >
            <NavbarBrand />
            <div className="heading-starting" style={{ "color": "black", "font": "Poppins" }}>
                Practice Interviews with Industry Experts
            </div>
            <div style={{ paddingLeft: "10px" }}>
                Mock Interviews with Mentor
            </div>
            <div style={{ paddingLeft: "10px", fontWeight: "bold", paddingTop: "10px" }}>
                Our Mentor Network:
            </div>
            <div className="row">
                <div className="col-2" >
                    <div id="dropdown" style={{ "fontSize": "12px" }}>
                        <Button id="btn-outline" className="btn m-2 primary bg-light" onClick={() => { setFilterdMentorList(JSONDATA) }}>
                            All
                        </Button>
                    </div>
                    <div id="dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ "white-space": "nowrap", "minWidth": "120px", "fontSize": "14px" }}>
                                {filteredCompany ? filteredCompany : "Company"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {company.map(each => {
                                    return <Dropdown.Item onClick={() => { filterListForCompany(each) }}>{each}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div id="dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ "white-space": "nowrap", "minWidth": "120px", "fontSize": "14px" }}>
                                {filteredDomain ? filteredDomain : "Domain"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {domain.map(each => {
                                    return <Dropdown.Item onClick={() => { filterListForDomain(each) }}>{each}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div id="dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ "white-space": "nowrap", "minWidth": "120px", "fontSize": "14px" }}>
                                {filteredRole ? filteredRole : "Role"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {role.map(each => {
                                    return <Dropdown.Item onClick={() => { filterListForRole(each) }}>{each}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-10 " style={{ "textAlign": "center" }}>
                    <div className="row m-1">
                        {filterdMentorList.map((details) => (
                            <Card
                                key={details.id}
                                name={details.name}
                                image={image}
                                company={details.company}
                                experience={details.experience}
                                domain={details.domain}
                                price={details.price}
                            />
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterviewWithMentor
