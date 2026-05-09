import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

const carouselImages = [
  "carousel1.png",
  "carousel2.png",
  "carousel3.png"
];

export default function App() {
  return (
    <div className="App">
      <div className="top-banner">
        <img
          src="logo_left.png"
          alt="Left Logo"
          className="banner-logo logo-left"
        />

        <div className="banner-carousel-box">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={3500}
            stopOnHover={false}
            swipeable={false}
            emulateTouch={false}
            dynamicHeight={false}
          >
            {carouselImages.map((img, i) => (
              <div key={img + i}>
                <img src={img} alt={`banner-carousel-${i + 1}`} className="banner-carousel-img" />
              </div>
            ))}
          </Carousel>

          {/* Overlay text */}
          <div className="banner-overlay-text">
            <h1>Seismic Imaging & Modeling LAB</h1>
            <h2>IIT Bombay</h2>
          </div>
        </div>

        <img
          src="logo_right.png"
          alt="Right Logo"
          className="banner-logo logo-right"
        />
      </div>

      {/* ----------- NAVBAR GOES HERE ----------- */}
      <nav className="main-navbar">
        <a href="#" className="nav-tab active">Home</a>
        <a href="#" className="nav-tab">Research</a>
        <a href="#" className="nav-tab">Team</a>
        <a href="#" className="nav-tab">Blog</a>
        <a href="#" className="nav-tab">Software</a>
        <a href="#" className="nav-tab">Publications</a>
        <a href="#" className="nav-tab">Fun</a>
      </nav>
      {/* ---------------------------------------- */}

      {/* More homepage content can go here next! */}
    </div>
  );
}
