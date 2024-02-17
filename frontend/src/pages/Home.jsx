import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/subtitle";
import SearchBar from "./../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";

const Home = () => {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="hightlight"> memories</span>
                </h1>
                <p>
                  Traveling is the art of discovering the world beyond familiar
                  horizons, where each journey becomes a canvas of diverse
                  cultures, landscapes, and unforgettable moments. It's a
                  passport to growth, offering a profound education that
                  transcends borders.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} autoPlay loop muted />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ========== FEATURED TOUR SECTION START ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========== FEATURED TOUR SECTION END =========== */}

      {/* ========== GALLERY SECTION START ============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Destination Pics</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimonial"} />
              <h2 className="testimonial__title">Customers Testimonials</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
    </>
  );
};

export default Home;
