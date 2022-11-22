import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./Hero.css";
import Button from 'react-bootstrap/Button';
import {motion} from "framer-motion";
AOS.init();

const Hero = () => {
  //Rendering the Hero section(Landing page) on the DOM
  return (
    <section id="hero">
      <Container>
        <Row className={`mx-auto`}>
          <Col
            lg={6}
            className="p-0"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="3500"
          >
            <div>
              <h1 className="font-link"> Enjoy Our Polygon Art</h1>
              <p className="testing">  Helping you enjoy through the entire order process!</p>
            </div>
          </Col>
        </Row>
        <Row
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="3100"
        >
          <div>
          
              <p>Hand made</p>
              <p> 400+ orders delivered</p>
              <p> Custom pricing!</p>
          </div>

          <p className="testing">
    <motion.button type="button" class="btn btn-primary btn-lg"  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>Contact us</motion.button>
    <motion.button type="button" class="btn btn-secondary btn-lg"  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>Pricing</motion.button>

</p>

        </Row>
      </Container>


    </section>
  );

};




AOS.init({
  duration: 6100,
})

export default Hero;