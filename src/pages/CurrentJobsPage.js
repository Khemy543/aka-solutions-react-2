import React from "react";
import { Helmet } from "react-helmet";

//reactstrap
import{
    
} from "reactstrap";

// core components
import WhiteNavbar from "../components/WhiteNavbar.js";
import Footer from "../components/Footer.js";
//import GalleryCarousel from "../components/GalleryCarousel.js";

 

function CurrentJobsPage() {
    return (
        <div>
            <Helmet>
        <title>Current Jobs | AKA Productive Solutions Limited</title>
      </Helmet>
      <WhiteNavbar />
                  
    <div className="main" style={{marginTop:"80px"}}>
    <div className="section section-contact-us text-center" 
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.88),rgba(0, 0, 0, 0.88)), url(" + require("../assets/img/image24.jpg") + ") no-repeat fixed",
          backgroundSize: "cover", width:"100%", height:"100vh"
          
        }}
        data-parallax={true}  
        >
        <div className="filter" />
        <h2 className="sub-title"  style={{marginTop:"18%", color:"white"}}>
          COMING SOON!
        </h2>
        </div>
      
              
      </div>

      <Footer/>
</div>
        
    );
}

export default CurrentJobsPage;