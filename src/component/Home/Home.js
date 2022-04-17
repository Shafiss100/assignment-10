import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Image/img (1).jpg'
import img2 from '../../Image/img (2).jpg'
import img3 from '../../Image/img (3).jpg'


const Home = () => {
    

    return (
      <div>
        <h1>Photography Service</h1>
        <div className="service-container">
          <div className="service">
            <h2>200$</h2>
            <li>1 hour service</li>
            <li>300 photos click</li>
            <li>100 edit photos </li>
            <li>Not weding photos </li>
            <button>active</button>
          </div>
          <div className="service">
            <h2>500$</h2>
            <li>1 hour service</li>
            <li>500 photos click</li>
            <li>200 edit photos </li>
            <li>weding photos </li>
            <button>active</button>
          </div>
          <div className="service">
            <h2>1000$</h2>
            <li>Full time service</li>
            <li>1000 photos click</li>
            <li>500 edit photos </li>
            <li>weding photos </li>
            <button>active</button>
          </div>
        </div>
      </div>
    );
};

export default Home;