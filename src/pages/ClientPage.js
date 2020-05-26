import React from "react";
//import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// reactstrap components
import {
   Container,
   Row,
   Col, 
   Card,
   CardBody,
    CardTitle
} from "reactstrap"

// core components
import WhiteNavbar from "../components/WhiteNavbar.js";
import Footer from "../components/Footer.js";


 

function ClientPage() {
    return (
        <div >
          <Helmet>
        <title>Clients | AKA Productive Solutions Limited</title>
        </Helmet>
                  <WhiteNavbar />
                  
                  <div className="main">
                  <div className="section text-center">
                  <Container>
            <Row id="ourservices">
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Our Clients</h2>
                <h5 className="description">
                we have provide highly qualified and skilled trades personnel for a lot of 
                construction industry which include both temporary and permanent placements. We also offer
                skilled and highly qualified staff with competitive rates with a personalised customer
                service. Some of our clients include
                </h5>
                <br />
                 
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
              <div>
              <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
              
              <img width="100%" src={require("../assets/img/clients/Royal mail.jpg")} alt="#" />
              <CardBody>
                <CardTitle>Cilantro</CardTitle>
                
               
              </CardBody>
            </Card >
              </div>
              </Col>
              <Col md="3">
              <div>
              <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
              
              <img width="100%" src={require("../assets/img/clients/Cilantro1.jpg")} alt="#" />
              <CardTitle>Cilantro</CardTitle>
            </Card >
              </div>
              </Col>
              <Col md="3">
              <div>
              <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
              
              <img width="100%" src={require("../assets/img/clients/lendlease.jpg")} alt="#" />
              <CardBody>
                <CardTitle>lendlease</CardTitle>
                
               
              </CardBody>
            </Card >
              </div>
              </Col>
              <Col md="3">
              <div>
              <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
              
              <img width="100%" src={require("../assets/img/clients/DHL1.png")} alt="#" />
              <CardBody>
                <CardTitle>DHL</CardTitle>
                
               
              </CardBody>
            </Card >
              </div>
              </Col>
            </Row>
            <br/>
            <br/>
            <Row>
              <Col md="3">
              <div>
              <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
              
              <img width="100%" src={require("../assets/img/clients/Manpower.png")} alt="#" />
              <CardBody>
                <CardTitle>Man Power</CardTitle>
                
               
              </CardBody>
            </Card >
              </div>
              </Col>
              <Col md="3">
              <div>
              <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
              
              <img width="100%" src={require("../assets/img/clients/Network Rail1.jpg")} alt="#" />
              <CardBody>
                <CardTitle>Network Rail</CardTitle>
                
               
              </CardBody>
            </Card >
              </div>
              </Col>
              <Col md="3">
              <div>
              <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
              
              <img width="100%" src={require("../assets/img/clients/UPS1.png")} alt="#" />
              <CardBody>
                <CardTitle>UPS</CardTitle>
                
               
              </CardBody>
            </Card >
              </div>
              </Col>
              
            </Row>

            
          </Container>
                      </div>
                      </div>
                      <Footer/>

            </div>
    );
}

export default ClientPage;