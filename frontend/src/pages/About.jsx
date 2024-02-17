import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/about.css";
import vid from "../assets/images/about.mp4";
import abtPic from "../assets/images/abt.jpg";

const About = () => {
  return (
    <>
      <section className="about_section">
        <video src={vid} autoPlay loop muted className="about__video" />
        <div className="text-overlay">
          <Container>
            <Row>
              <Col lg="12">
                <h1>
                  Crafting an Eco-conscious Travel Universe for Blissful
                  Explorers
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* About page content */}
      <div style={{ marginTop: "10px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <p className="heading">About PathPulse: </p>
              <p>
                PathPulse, a travel guidance platform, assists individuals in
                becoming better travelers, from planning their trips to booking
                accommodations and embarking on their journeys. Travelers rely
                on the PathPulse site to discover destinations for their travels
                based on expert guidance and insights. With PathPulse, travelers
                can explore off-the-beaten-path destinations, uncover hidden
                gems, and immerse themselves in local cultures with confidence.
                Whether you're a seasoned globetrotter or a first-time explorer,
                PathPulse empowers you to make the most of your travel
                adventures, creating memories that last a lifetime. Join the
                PathPulse community today and unlock a world of possibilities at
                your fingertips. Through user-generated reviews and ratings,
                PathPulse fosters a vibrant community. With a commitment to
                sustainability, PathPulse promotes eco-friendly travel
                practices, encouraging responsible tourism for a brighter
                future. From solo adventurers to family vacations, PathPulse
                caters to diverse travel preferences, ensuring that every trip
                is tailored to your unique interests and needs. Trust PathPulse
                to be your ultimate companion in the exciting journey of
                exploration and discovery.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="abt_img_text">
          <img src={abtPic} alt="" className="custom-image-class" />
          <p className="text-below-image">
            <Link to="/tours">Travel with us!</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
