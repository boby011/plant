
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircleUser, faCartShopping, faCircleArrowRight, faCircleChevronLeft, faCircleChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import{FaSearch,FaUser} 


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImageCarousel from './ImageCarousel';

import img1 from './p1.png'
import img2 from './p4.png'
import img3 from './p5.png'
import img4 from './p7.jpg'
import pl1 from './pl1.png'
import pl2 from './p12.jpg'
import pl3 from './p13.jpg'
import pl4 from './p14.jpg'


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Plants = () => {
    return (
        <>

            <header>
                <Navbar collapseOnSelect expand="lg" >
                    <Container>
            
                        <Navbar.Brand href="#home"> Planty'x</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className=" mx-auto gap-4 ">
                                <Nav.Link href="#features">Plants</Nav.Link>
                                <Nav.Link href="#pricing">For offices</Nav.Link>
                                <Nav.Link href="#plantscare">Plants care </Nav.Link>
                                <Nav.Link href="#about">About </Nav.Link>
                            </Nav>
                            <Nav className='gap-4 '>
                                <Nav.Link href="#deets" ><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                                <Nav.Link href="#memes" ><FontAwesomeIcon icon={faCircleUser} /></Nav.Link>
                                <Nav.Link href="#memes" ><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <section>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} md={12} className='mt-5'>
                            <div>
                                <p className='head'>Best house <br /> plants varieties.</p>
                                <button className='btn'>Shop now</button>
                                <p className='fs-5 fw-medium mt-5 '>Beautiful living greenery for <br /> homes and offices</p>
                                <p className=' fw-light '>We've been mentioned in the press</p>
                                <p className='blk'>
                                    <span>Bloomberg</span>
                                    <span>Forbes</span>
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div>
                                <img src={img1} alt="" style={{ width: '100%', margin: '0px' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


<section>
                <Container>
                    <Row className='mt-5'>
                        <Col lg={6} md={12}>
                            <div className='fs-5 fw-light'>
                                Each houseplant set is handled quickly and safely
                                <br />before being sent to your destination in specially
                                <br />designed insulated packaging.
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='fs-2 fw-medium'>
                                Learn how we take care of your plant
                                at every stage of its journey from our
                                greenhouse to your home.
                            </div>
                            <div className='mt-5'>
                                <a href="" style={{ textDecoration: 'none', color: 'black' }}>LEARN MORE <FontAwesomeIcon icon={faCircleArrowRight} /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section>
                <div className=' position-relative '>
                    <div className='d-flex justify-content-center align-items-center m-5 position-absolute z-1 '>
                        <ImageCarousel />
                    </div>
                    <div className='background position-absolute z-0 d-flex align-items-end' style={{ marginTop: '300px' }}>
                        <div className='m-5 fw-medium '>
                            <span>STEP 1</span>
                            <span style={{ paddingLeft: '420px', paddingRight: '400px' }} className=' fs-2'>We put everything together</span>
                            <span style={{ fontSize: '40px', paddingRight: '20px' }}><FontAwesomeIcon icon={faCircleChevronLeft} /></span>
                            <span style={{ fontSize: '40px' }}><FontAwesomeIcon icon={faCircleChevronRight} /></span>
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div >  {/*style={{ marginTop: '50rem' }} */}
                    <div className='m-5'>
                        <p>OUR SHOP</p>
                        <p className='fs-1 fw-medium '>Here are the best seller <br /> from our varieties</p>
                        <button className='btn'>See all</button>
                    </div>
                    <div className='m-5'>
                        <Carousel responsive={responsive} >
                            <div>
                                <img src={pl1} alt=""  />
                                <div>
                                    <span>Fiddle-leaf fig</span>
                                    <span style={{ paddingLeft: '140px' }}>$110.99</span>
                                </div>
                            </div>
                            <div>
                                <img src={pl2} alt="" className='img-fluid h-20' />
                                <div>
                                    <span>Strelitzia nicolai</span>
                                    <span style={{ paddingLeft: '140px' }}>$110.99</span>
                                </div>
                            </div>
                            <div>
                                <img src={pl3} alt="" className='img-fluid h-100'/>
                                <div>
                                    <span>Ficus microcarpa</span>
                                    <span style={{ paddingLeft: '140px' }}>$110.99</span>
                                </div>
                            </div>
                            <div>
                                <img src={pl4} alt="" className='img-fluid h-100'/>


<div>
                                    <span>Aloe vera</span>
                                    <span style={{ paddingLeft: '140px' }}>$110.99</span>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className=''>
                        <Container>
                            <Row className='mt-5'>
                                <Col md={12} lg={4}>
                                    <div>
                                        <p className='fs-5 fw-medium'>REVIEWS</p>
                                        <p className='fw-lighter'> Shop with confidence by reading customer
                                            <br />reviews given by individuals who have used
                                            <br />Bloomey. Excellent quality and streamlined
                                            <br />service are both offered here.
                                        </p>
                                        <p className='fw-medium'>
                                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                            <span>5/5</span>
                                        </p>
                                        <p className='fw-medium'>2.479 reviews</p>
                                    </div>
                                </Col>
                                <Col md={12} lg={4}>
                                    <p className='fs-3 fw-medium'>
                                        We adore all our friends at Bloomey, especially the beauties who have come to live with us! Great advice when needed, beautifully and safely packaged. Highly recommend, it's just the best place for healthy plants and great value!
                                    </p>
                                    <p className='fs-5'>Pamela S.</p>
                                    <p className='fw-lighter'>Lake Forest, CA</p>
                                </Col>
                                <Col md={12} lg={4} className='d-flex align-items-center justify-content-center'>
                                    <div>
                                        <span style={{ fontSize: '40px', paddingRight: '20px' }}><FontAwesomeIcon icon={faCircleChevronLeft} /></span>
                                        <span style={{ fontSize: '40px' }}><FontAwesomeIcon icon={faCircleChevronRight} /></span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className='m-5 m-md-5 '>
                    <span ><img src={img2} alt="" /></span>
                    <span style={{ paddingLeft: '55px' }}><img src={img3} alt="" /></span>
                </div>
            </section> */}
            <section>
                <div>
                    <div className='m-3 m-md-5'>
                        <Container>
                            <Row className='align-items-center'>
                                <Col sm={5} className='mt-3 mt-sm-0'>
                                    <img src={img2} alt="" className='img-fluid h-100 ' />


</Col>
                                <Col sm={7} className='mt-3 mt-sm-0'>
                                    <img src={img3} alt="" className='img-fluid h-100 ' />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            <section>
                <div className='m-3 m-md-5'>
                    <img src={img4} alt="" className='img-fluid' />
                </div>
            </section>

            <section>
    <div className=''>
        <Container>
            <Row className='flex-column-reverse flex-md-row'>
                <Col md={6} className='order-md-2'>
                    <div className='d-flex align-items-end'>
                        <input type="text" placeholder='Your email' />
                        <button className='btn'>Subscribe</button>
                    </div>
                </Col>
                <Col md={6} className='order-md-1'>
                    <div>
                        <p className='fs-1 fw-medium '>Stay updated with special offers,<br />plant-parenting tips, and more.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
</section>

<footer>
    <div className='' style={{ backgroundColor: '#ebe7e7', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Container>
            <Navbar expand='sm' className="justify-content-center mt-sm-5 ">
                <Navbar.Brand href="#home">Planty'x</Navbar.Brand>
                <Nav className="mx-auto ">
                    <Nav.Link href="#features">Help</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    <Nav.Link href="#plantscare">Privacy & Terms</Nav.Link>
                </Nav>
                <Nav className='gap-4  '>
                    <Nav.Link href="#deets" ><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
                    <Nav.Link href="#memes" ><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                    <Nav.Link href="#memes" ><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    </div>
</footer>






        </>
    )
}


