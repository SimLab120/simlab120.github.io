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
 

<main className="main-content-with-gif">
  <section className="research-fields">
    {/* --- SECTION 1 --- */}
    <div className="research-section">
      <div className="research-title-box">
        <h3>Seismic Modeling and Inversion</h3>
        <p> Acoustic/Elastic waveform modeling,Imaging, tomography, and Inversion using Conventional methods and Deep learning algos </p>
      </div>
      <div className="research-carousel-box">
        {/* Carousel for Section 1 */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={3500}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
        >
          <div>
            <img src="fwi1.png" alt="Inversion Result 1" className="research-carousel-img" />
          </div>
          <div>
            <img src="fwi2.png" alt="Inversion Result 2" className="research-carousel-img" />
	</div>
  <div>
            <img src="fwi3.png" alt="Inversion Result 2" className="research-carousel-img" />
	</div>
        
        </Carousel>
      </div>
    </div>

    {/* --- SECTION 2 --- */}
    <div className="research-section">
      <div className="research-title-box">
        <h3>Seismic Data Processing</h3>
        <p>Deploying State-of-the-art AI models (ConvLSTM/Transformers) for seismic data processing automation like velocity analysis,denoising and data reconstruction</p>
      </div>
      <div className="research-carousel-box">
        {/* Carousel for Section 2 */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={3500}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
        >
          <div>
            <img src="dl1.png" alt="Imaging Example 1" className="research-carousel-img" />
          </div>
          <div>
            <img src="dl2.png" alt="Imaging Example 2" className="research-carousel-img" />
          </div>
  <div>
            <img src="dl3.png" alt="Inversion Result 2" className="research-carousel-img" />
	</div>
        
        </Carousel>
      </div>
    </div>

    {/* --- SECTION 3 --- */}
    <div className="research-section">
      <div className="research-title-box">
        <h3>Passive Seismology & Interferometry</h3>
        <p>Passive Seismology with surface waves and ambient noise </p>
      </div>
      <div className="research-carousel-box">
        {/* Carousel for Section 3 */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={3500}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
        >
          <div>
            <img src="ant1.gif" alt="Modeling Simulation 1" className="research-carousel-img" />
          </div>
          <div>
            <img src="ant2.gif" alt="Modeling Simulation 2" className="research-carousel-img" />
          </div>
  <div>
            <img src="ant3.png" alt="Inversion Result 2" className="research-carousel-img" />
	</div>
        
        </Carousel>
      </div>
    </div>

  </section>
</main>
      {/* ---------------------------------------- */}

      {/* More homepage content can go here next! */}
    </div>
  );
}
