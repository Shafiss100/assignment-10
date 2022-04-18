import React from 'react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap';
import img1 from '../../Image/img (1).jpg'
import img2 from '../../Image/img (2).jpg'
import img3 from '../../Image/img (3).jpg'


const Home = () => {
    

    return (
      <div>
        <div
          className="margin"
        >
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
              <Carousel.Caption>
                <h3>Dhaka</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />

              <Carousel.Caption>
                <h3>Rajshahi</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Bandorban</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <div className="width">
            <h1 className="center">Photography Service</h1>
          </div>
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
        <footer className='margin'>
          <h1>What I use in this website?</h1>
          <li>Carousel from bootstrap.</li>
          <li>In checkout box I shaw the user email by useAuthState form react firebase hook / auth. but when the any user not login the checkout button work as a private route</li>
          <li>In the blog box. I write the 3 question.</li>
          <li>in login page I give 2 authentication email and google. </li>
          <li>also give a permisson to reset the password</li>
          <li>below the login form I give a sign up link</li>
          <li>when user already login then the login button will be out and signout button show on that possition</li>
          <li>also i use the active route</li>
          <li>in About page I written about me</li>
        </footer>
      </div>
    );
};

export default Home;