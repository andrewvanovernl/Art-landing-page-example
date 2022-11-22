import React, { Component } from 'react'
import "./Box.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Fox1 from '../Fox1.png';
import Bird from '../Bird.jpg';
import Fox from '../Fox.png';
import Panther from '../Panther.webp';
import Bird1 from '../Bird1.png';
import Bird2 from '../Bird2.png';
import Polygon from '../Polygon.jpg';
import Tree from '../Tree.png';

AOS.init();

export class Box extends Component {
  render() {
    return (
      <div>
      <div class="item" data-aos="fade-up"><img src={Fox1} alt="Fox1" className='image'/></div>
      <div class="item" data-aos="fade-down"><img src={Bird} alt="Bird" className='image'/></div>
      <div class="item" data-aos="fade-right"><img src={Fox} alt="Fox" className='image'/></div>
      <div class="item" data-aos="fade-left"><img src={Bird1} alt="Bird1" className='image'/></div>
      <div class="item" data-aos="zoom-in"><img src={Panther} alt="Panther" className='image'/></div>
      <div class="item" data-aos="zoom-out"><img src={Tree} alt="Tree" className='image'/></div>
      <div class="item" data-aos="slide-up"><img src={Bird2} alt="Bird2" className='image'/></div>
      </div>
    )
  }
}
AOS.init({
  duration: 1200,
})



export default Box