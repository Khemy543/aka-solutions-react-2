
import React,{ useState} from "react";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

//axios
import axios from 'axios';

//react slick
import Slider from "react-slick";


//Cookies
import { useCookies } from 'react-cookie';
import CookieConsent from "react-cookie-consent";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal, 
  Spinner,
  UncontrolledTooltip
} from "reactstrap";

// core components
import Navbar from "../components/NavBar.js";
import LandingPageHeader from "../components/LandingPageHeader.js";
import Footer from "../components/Footer.js";
//googlemaps
import  MapContainer  from "../components/GoogleMaps.js";
import 'font-awesome/css/font-awesome.min.css';
import "../assets/css/Carousel.css";



axios.defaults.withCredentials = true;
//axios.defaults.headers.common['Auth-Token'] = 'foo bar';
const config = {
  withCredentials: true, 
  headers : {
  "Access-Control-Allow-Origin":"*",
  "Content-Type": "application/json",
  "Access-Control-Request-Headers":"authorization",
  },

};

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

// react slick settings
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive:[
      {
        breakpoint:450,
        settings:{
            centerMode:true,
            slidesToShow:1,
            centerPadding:'60px'
        }
      }
    ]
  };

  const [cookies, setCookie] = useCookies(['name']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertpop, setAlertpop] = useState(false);

  
  const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);


const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(e);
   
axios.post('https://salty-anchorage-79079.herokuapp.com/api/v1/post-message', {
  config, name, email, message
}).then(res => {
  console.log(res);
  if (res.data.status === 200){
    setAlertpop(true);
    setEmail('');
    setName('');
    setMessage('');
  }
  else{

  }
   
}) 

}


  return (
    <div>
      <Helmet>
        <title>Home | AKA Productive Solutions Limited</title>
      </Helmet>
      <Navbar />
      <LandingPageHeader />
      <div className="main">
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName1555"
        style={{ background: "rgb(38, 45, 61)" }}
        buttonStyle={{ backgroundColor:"rgb(38, 45, 61)", color: "white", fontSize: "13px" , borderRadius:"4px", border:"1px solid white"}}
        expires={150000}
    >
    This website uses cookies to ensure you get the best experience on our website.{" "}
    <div>
    <a href ="#!" style={{ fontSize: "12px" }}>
    Learn more
    </a>
    </div>
    
    </CookieConsent>
        <div className="section text-center" id="services">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title" color="info">Our Services</h2>
                <h5 className="description">
                we provide highly qualified and skilled trades personnel for the
construction industry which include both 

                </h5>
                
               
              </Col>
            </Row>
            <br />
            <Row>
            <Col md="4">
            <div data-aos="slide-right" data-aos-delay="400" style={{
                background: "linear-gradient(rgba(0, 161, 255, 0.58),rgba(0, 161, 255, 0.58)), url(" + require("../assets/img/image8.jpg") + ") no-repeat fixed",
                backgroundSize: "cover", maxWidth:"390px", height:"400px", borderRadius:"5px",
                 border:"2px solid rgba(0, 161, 255, 0.58)"
              }}>
             
             <div style={{
                   position:"absolute",
                   bottom:"8px",
                   left:"16px"
                 }}>
                 <h3 className="sub-title" style={{color:"white", textAlign:"left", fontWeight:"500"}}>OFFER SKILLED PERSONNELS</h3>
                 <p style={{color:"white", textAlign:"left"}}>we provide highly qualified and skilled trades personnel for the construction industry</p>
                 <br/>
                 <Button
                 className="btn-round"
                 color="info"
                 style={{float:"left"}}
                 href="/services"
                 >
                  
                  Read more </Button>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
             </div>

                    </div>
              </Col>
             
              <Col md="4">
              <div data-aos="slide-right" data-aos-delay="200" style={{
                background: "linear-gradient(rgba(0, 161, 255, 0.58),rgba(0, 161, 255, 0.58)), url(" + require("../assets/img/image8.jpg") + ") no-repeat fixed",
                backgroundSize: "cover", maxWidth:"390px", height:"400px", borderRadius:"5px",
                 border:"2px solid rgba(0, 161, 255, 0.58)"
              }}>
             
              <div style={{
                position:"absolute",
                bottom:"8px",
                left:"16px"
              }}>
              <h3 style={{color:"white", textAlign:"left", fontWeight:"500"}}>CONSTRUCTION</h3>
              
              <p style={{color:"white", textAlign:"left"}}>Provide high skilled engineers and labour force for construction work in industries and homes</p>
              <br/>
              <Button
              className="btn-round"
              color="info"
              style={{float:"left"}}
              href="/services"
              >
               
               Read more </Button>
               <br/>
               <br/>
               <br/>
               <br/>
          </div>

                    </div>
              </Col>
              <Col md="4">
              <div data-aos="slide-right" style={{
                background: "linear-gradient(rgba(0, 161, 255, 0.58),rgba(0, 161, 255, 0.58)), url(" + require("../assets/img/image8.jpg") + ") no-repeat fixed",
                backgroundSize: "cover", maxWidth:"390px", height:"400px", borderRadius:"5px",
                 border:"2px solid rgba(0, 161, 255, 0.58)"
              }}>
             
              <div style={{
                position:"absolute",
                bottom:"8px",
                left:"16px"
              }}>
              <h3 style={{color:"white", textAlign:"left", fontWeight:"500"}}>RECRUITMENT</h3>
              
              <p style={{color:"white", textAlign:"left"}}>Recruitment of high skilled personnels for work and training</p>
              <br/>
              <Button
              className="btn-round"
              color="info"
              style={{float:"left"}}
              href="/services"
              >
               
               Read more </Button>
               <br/>
               <br/>
               <br/>
               <br/>
          </div>

                    </div>
              </Col>
              
            </Row>
          </Container>
        </div>
        <div className="section" id="about-us" style={{backgroundColor:"rgb(0, 161, 255)"}}>
          <Container>
          <Row>
              <Col className="ml-auto mr-auto" md="6" data-aos="fade-right" data-aos-delay="100">
                <h2 className="title" style={{color:"white"}}>Let's talk About us</h2>
                
                <h5 className="description" style={{color:"white"}}>
                Established on 10th July 2013<br/> <br/>
                Construction and
Recruitment company based in Ilford
greater london In the Essex area. Our target location includes ESSEX and London as a
whole. Our first client was Cilantro engineering
but our current client is JADEB other clients includes lendlease,
bellway homes and ballymore builders.
                </h5>
              </Col>
              <Col md="6" data-aos="zoom-in" data-aos-delay="100">
                <img src={require("../assets/img/image15.jpg")} alt="#" style={{width:"100%", height:"auto",marginBottom:"-50px" , borderRadius:"5px"}}/>
              </Col>
            </Row>
            <br />
            <br />
           
          </Container>
        </div>

        <div className="section landing-section" id="clients">
          <Container>
          <h2 className="text-center">Our Latest Clients</h2>
          <br/>
            <Row>
            
              <Col md="12" style={{overflowX:"hidden"}}>
          <Slider {...settings}>
        <div>
          
        <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
        
        <img width="100%" alt="#" src={require("../assets/img/clients/Royal mail.jpg")} />
        <CardBody>
         
        <CardTitle>Royal Mail</CardTitle>
         
          
        </CardBody>
      </Card>
        </div>
        
        <div>
        <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
        
        <img width="100%" alt="#" src={require("../assets/img/clients/Cilantro1.jpg")} />
        <CardBody>
          <CardTitle>Cilantro</CardTitle>
         
         
        </CardBody>
      </Card >
        </div>
        <div>
        <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
        
       
        <img width="100%" alt="#"  src={require("../assets/img/clients/lendlease.png")}/>
        
        <CardBody>
        <CardTitle>LendLease</CardTitle>
          
         
          
        </CardBody>
      </Card>
        </div>
        <div>
        <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
        
        <img width="100%" alt="#"  src={require("../assets/img/clients/DHL1.png")} />
        <CardBody>
        <CardTitle>DHL</CardTitle>
          
         
         
        </CardBody>
      </Card>
        </div>
        <div>
        <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
        
        <img width="100%" alt="#"  src={require("../assets/img/clients/Manpower.png")} />
        <CardBody>
        <CardTitle>Man Power</CardTitle>
         
         
         
        </CardBody>
      </Card>
        </div>
        <div>
        <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
        
        <img width="100%" alt="#"  src={require("../assets/img/clients/Network Rail1.jpg")} />
        
        <CardBody>
        <CardTitle>Network Rail</CardTitle>
          
         
         
        </CardBody>
      </Card>
        </div>
        <div>
        <Card style={{maxWidth:"335px", border:"1px solid #f8f9fa"}}>
        
        <img alt="#"  src={require("../assets/img/clients/UPS1.png")} />
        <CardBody>
        <CardTitle>UPS</CardTitle>
         
          
        </CardBody>
      </Card>
        </div>
      </Slider>
      </Col>
      </Row>
      <Button
      color="info"
      href="/client-page"
      className="btn-round"
      >
       view more clients
        </Button>
      </Container>
          </div>


          <div className="section text-center"
        
        style={{
          background: "linear-gradient(rgba(0, 161, 255, 0.58),rgba(0, 161, 255, 0.58)), url(" + require("../assets/img/image8.jpg") + ") no-repeat fixed",
          backgroundSize: "cover"
          
        }}
        data-parallax={true}        
        >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 style={{color:"white"}}>Need Help Finding trade Professionals?</h1>
            <h3 style={{color:"white"}}>We can help you!</h3>
            <p style={{color:"white"}}>Personalised customer service. We provide highly qualified and skilled trades personnel</p>
            </div>
            <br />
            <Link
            activeClass="active"
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
            >
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              REQUEST A CALLBACK
            </Button>
            </Link>
            </Container>

          </div>


        <div className="section landing-section" id="contact-us">
          <Container>
          <h2 className="text-center">Contact Us</h2>
          {/* {!alertpop?
              <div>
              
              </div>
              :
              <Alert color="info" isOpen={visible} toggle={onDismiss}>
              I am an alert and I can be dismissed!
              </Alert>
              } */}
            <Row>
            
            <Col className="ml-auto mr-auto" md="4" data-aos="fade-right" data-aos-delay="100">
            <div>
            <h3>Contact info</h3>
                      <p class="description"><i className="fa fa-home" style={{marginRight:"15px"}}/>Office # 38, Suite 54 Elizebth Street, Victoria State Newyork, USA 33526</p>
                      <p class="description"><i className="fa fa-phone" style={{marginRight:"15px"}}/>+233-552480391</p>   
                      <p class="description"><i className="fa fa-envelope" style={{marginRight:"15px"}}/>joseph@akaproductivesolutionsltd.co.uk</p>             
                  </div>
            </Col>
              <Col className="ml-auto mr-auto" md="6" data-aos="zoom-in" data-aos-delay="100">
              
                
                <Form className="contact-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" name="name" value={name}
                onChange={
                  e => {
                  setName(e.target.value)
                  setCookie('name', e.target.value, { path: '/' });

                  } }
                require
                />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" name="email" value={email}
                onChange={e => setEmail(e.target.value)}
                require
                />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    name="message"
                    value={message}
                onChange={e => setMessage(e.target.value)}
                require
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="primary" size="lg" type="submit" onClick={toggle} disabled={!email||!message||!name}>
                        Send
                      </Button>

                      <Modal id="modal" isOpen={modal} toggle={toggle} style={{
                        width:"200px" ,
                        marginTop:"10%",
                         
                      }}>
                      
                      <div style={{alignContent:"center"}}>
                      {!alertpop?
                        <Spinner color="primary" style={{marginTop:"50px", marginRight:"50px", marginLeft:"80px", marginBottom:"50px"}}/>
                        :
                        <div>
                        <i className="fa fa-check-circle" style={{fontSize:"56px",color:"rgba(1, 137, 254, 0.9)",marginTop:"50px", marginRight:"50px", marginLeft:"80px", marginBottom:"50px"}}></i>
                        {console.log(cookies.name) }
                        </div>
                      }
                      
                      </div>
                      </Modal>

                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center" style={{height:"350px", marginTop:"-70px"}}> 
           
           <MapContainer />
             
        </div>
        
        <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8" data-aos="fade-right">
              <h2 className="title">Do you like Our Servies?</h2>
              <p className="description">
                Cause if you do, it can be yours for Free. Hit the button below
                and download it. Start a new project or give an old Bootstrap 4
                project a new look.
              </p>
            </Col>
            
          </Row>
          
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12" data-aos="fade-right">
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="#pablo"
                id="tooltip3373767"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href="#pablo"
                id="tooltip840791273"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-google-plus" /> Google
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Share!
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Share!
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="linkedin-bg"
                href=""
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-linkedin" /> Linkedin
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Share on linkedin
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>

      </div>
       <Footer/>
    </div>
  );
}

export default LandingPage;
