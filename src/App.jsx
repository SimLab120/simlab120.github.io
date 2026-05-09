import React from "react";
import Particles from "react-tsparticles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./App.css"; // Add your custom styles here

const labMembers = [
  {
    name: "Dr. Alice Smith",
    img: "img1.jpg",
    socials: {
      twitter: "https://twitter.com/alice",
      linkedin: "https://linkedin.com/in/alice",
    },
    interests: "Computational Physics, Simulation",
  },
  {
    name: "Bob Lee",
    img: "img2.jpg",
    socials: {
      github: "https://github.com/boblee",
    },
    interests: "Machine Learning, High Performance Computing",
  },
];

const alumni = [
  {
    name: "Jane Doe",
    blog: "https://janedoe.com/blog",
  },
];

function App() {
  return (
    <div className="App">
      <Particles options={{ /* Example: */ fullScreen: { enable: false }, particles: { number: { value: 50 }, size: { value: 3 } } }} />
      <header style={{ textAlign: "center", padding: "2em" }}>
        <h1>SimLab 120</h1>
        <p>Innovative Research in Simulation and Computation</p>
      </header>

      <section style={{ maxWidth: 800, margin: "0 auto" }}>
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src="img1.jpg" alt="Lab 1" />
            <p className="legend">Team Meeting (2024)</p>
          </div>
          <div>
            <img src="img2.jpg" alt="Lab 2" />
            <p className="legend">Simulation Results</p>
          </div>
        </Carousel>
      </section>

      <section>
        <h2>Research Areas</h2>
        <ul>
          <li>Computational Modeling of Materials</li>
          <li>Machine Learning in Physics</li>
          <li>High Performance Computing</li>
        </ul>
      </section>

      <section>
        <h2>Lab Members</h2>
        <div style={{ display: "flex", gap: "2em", flexWrap: "wrap", justifyContent: "center" }}>
          {labMembers.map((person) => (
            <div key={person.name} style={{ border: "1px solid #ddd", padding: 12, minWidth: 200, borderRadius: 8 }}>
              <img src={person.img} alt={person.name} style={{ width: 100, borderRadius: "50%" }} />
              <h3>{person.name}</h3>
              <p>Interests: {person.interests}</p>
              <div>
                {person.socials.twitter && <a href={person.socials.twitter}>Twitter</a>}{" "}
                {person.socials.linkedin && <a href={person.socials.linkedin}>LinkedIn</a>}{" "}
                {person.socials.github && <a href={person.socials.github}>GitHub</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Alumni</h2>
        <ul>
          {alumni.map((person) => (
            <li key={person.name}>
              <a href={person.blog}>{person.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <footer style={{ marginTop: 40, textAlign: "center" }}>
        <p>Contact: info@simlab120.edu</p>
      </footer>
    </div>
  );
}

export default App;
