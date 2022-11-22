import React, { Component } from 'react'
import './Banner.css';
import Bird from '../Bird.jpg';
import Fox from '../Fox.png';
import Panther from '../Panther.webp';
import Bird1 from '../Bird1.png';
import Bird2 from '../Bird2.png';
import Polygon from '../Polygon.jpg';
import Fox1 from '../Fox1.png';


export class Banner extends Component {
  render() {
    return ( 
        <div className='cards'>

     
      <div className='card'><img src={Fox1} alt="Fox1" className='image'/></div>
      <div className='card'><img src={Bird1} alt="Bird1" className='image'/></div>
      <div className='card'><img src={Polygon} alt="Polygon" className='image'/></div>
      <div className='card'><img src={Panther} alt="Panther" className='image'/></div>
      <div className='card'><img src={Fox} alt="Fox" className='image'/></div>
      <div className='card'><img src={Bird2} alt="Bird2" className='image'/></div>
      </div>
 
    )
  }
}

export default Banner

//<img src={Bird} alt="Bird"> <img>//