import React from "react";
//import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// reactstrap components
import {
   Container,
   Row,
   Col
} from "reactstrap"

// core components
import NavBarHeader from "../components/NavBarHeader.js";
import Footer from "../components/Footer.js";
import Slide from "../components/Carousel.js";

 

function ServicesPage() {
    return (
        <div >
          <Helmet>
        <title>Services | AKA Productive Solutions Limited</title>
        </Helmet>
                  <NavBarHeader />
                  <Slide />
                  <div className="main">
                  <div className="section text-center">
                  <Container>
            <Row id="ourservices">
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Our Services</h2>
                <h5 className="description">
                we have provide highly qualified and skilled trades personnel for a lot of 
                construction industry which include both temporary and permanent placements. We also offer
                skilled and highly qualified staff with competitive rates with a personalised customer
                service. Some of our clients include
                </h5>
                <br />
                 
              </Col>
            </Row>
            <Row>
                <Col md="4">
                <div data-aos='zoom-in'>
                <img alt="#" src={require("../assets/img/services/service3.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Website Design</h4>
                </div>
                </Col>
                <Col md="8">
                <p style={{
                marginTop:"20px" , paddingLeft:"60px", borderLeft:"2px solid #00000036"
              }}
              data-aos='zoom-in'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
                </Col>
                </Row>
                <Row>
                <Col md="8">
                <p style={{
                marginTop:"20px" , paddingLeft:"60px", borderLeft:"2px solid #00000036"
              }}
              data-aos='zoom-in'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
                </Col>
                <Col md="4">
                <div data-aos='zoom-in'>
                <img alt="#" src={require("../assets/img/services/service3.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Website Design</h4>
                </div>
                </Col>
                </Row>
                <Row md="4">
                <div data-aos='zoom-in'>
                <img alt="#" src={require("../assets/img/services/service3.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Website Design</h4>
                </div>
                <Col>
                </Col>
                <Col md="8">
                <p style={{
                marginTop:"20px" , paddingLeft:"60px", borderLeft:"2px solid #00000036"
              }}
              data-aos='zoom-in'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
                </Col>
                </Row>
            </Container>
            </div>
            </div>
            <Footer/>
            </div>
    );
}

export default ServicesPage;