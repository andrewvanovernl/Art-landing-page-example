import React, { Component } from 'react'
import './Header.css';
import {motion} from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export class Header extends Component {
  render() {
    return ( 
      <div>
        <motion.button  className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}>text</motion.button>
      </div>
    )
  }
}

export default Header