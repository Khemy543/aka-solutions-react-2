import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from "react-router-scroll-top";
import "./App.css";
//cookies
import { CookiesProvider } from 'react-cookie';

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss"; 
import "./assets/demo/demo.css";

 
//AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// pages
import LandingPage from "./pages/LandingPage.js";
import ClientPage from "./pages/ClientPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import PageNotFound from "./pages/PageNotFound.js";
import ShoppingPage from "./pages/ShoppingPage.js";
import CurrentJobsPage from "./pages/CurrentJobsPage";
import ServicesPage from "./pages/ServicesPage.js";



class App extends React.Component {

  componentDidMount(){
    AOS.init({
        duration: 1000
    })
}
  render(){
    return(
      <BrowserRouter>
      <CookiesProvider/>
      <ScrollToTop />
          <Switch>
           <Route exact path='/' component={ LandingPage } />
           <Route exact path='/client-page' component={ ClientPage } />
           <Route exact path='/gallery' component={ GalleryPage } />
           <Route exact path='/shop' component={ ShoppingPage } />
           <Route exact path="/currentjobs" component={ CurrentJobsPage } />
           <Route exact path="/services" component={ ServicesPage } />
           <Route path ="*" component ={PageNotFound} />
          </Switch>
          
      
      </BrowserRouter>
      
    );
  }
}

export default App;
