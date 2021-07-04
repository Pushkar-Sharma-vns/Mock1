import  Button  from 'react-bootstrap/Button';
import React from 'react'
import NavbarBeforeSignUp from '../components/navbarBeforeSignUp'
import Testimonials from '../components/testimonials';



const Home = () => {
    
    return (
        <div className="p-4">
            <NavbarBeforeSignUp/>
            {/* build actual products */}
            <div className= "row container-fluid">
            {/* left side */}
                <div className = "col-6">
                    <div className= "heading-starting">
                     Build actual products that you can showcase to the world
                    </div>
                    <div className="text-block">
                    Product Management is a hands-on role! We believe the best way to learn & showcase your intent for a PM role is by building actual products & living through the challenges of a real-life PM. 
                    Theoretical readings/courses will only take you halfway through the learning curve. 
                    So, we built <strong>heyPM</strong> to bridge that gap & address the other half, to help you cross the finish line.

                    </div>
                    <div className= "row">
                        <div className="col-3 ml-5 p-3">
                            <Button id="btn-practice" className="btn">Practice Ground</Button>
                        </div>
                        <div className="col-3 ml-5 p-3">
                            <Button id="btn-practice" className="btn" >Interview Substack</Button>
                        </div>
                    </div>

                </div>
                {/* image */}
                <div className = "col-6">
                <img 
                    id="img-job-interview"
                    src="https://s3-alpha-sig.figma.com/img/00f2/fbd8/74ee43f56cf55b382b69f65e2a5c8706?Expires=1626048000&Signature=DIFudW2UpId~xV6grqpJEiET8QgHrwaYY4ez0IeHIF7cKh8kRmGckmrxnUxcrrONgbztHWjHE0s3RntM1gu9Dg07darFAEyiKkPpihW00SJJXcxX59yBYh8KKPJY4SwUIHwhY83t-CueZUrw8mvdfTMlTk69PtQ8Aog3OE1bGk5-MCFO3bqqDH6QxrMRrP1Kc4DRS1eejzkMvi6-YQpZFaEkaJnbMBVATgizZFEIk19tglF035IMNknP9kjoA5K2xVeJ4kytAmex-u-eFMf-FlHVVnvvzntPikXHrLhlvqMKp3cq2Im29G5cguHOzeOpa3Eo8SQKjJ11WA4fqmTqig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="job interview image"
                    />
                </div>

            </div>
            {/* testimonals */}
            <Testimonials/>
            {/* links */}
            <div className="row pl-5">
                <div className="col-4">
                    <Button variant="link">Become a mentor</Button>
                </div>
                <div className="col-4">
                    <Button variant="link">Submit Your Interview Experience</Button>
                </div>
                <div className="col-4">
                    <Button variant="link">More Testimonals..</Button>
                </div>
            </div>
        </div>
    )
}

export default Home
