import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Connect with us on social sites</p>
              <div className="social__link d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          {/* Wrap the sections inside a flexbox container */}
          <Col lg="9" className="d-flex">
            <div className="flex-grow-1">
              <h5 className="footer__link-title">Contact</h5>
              <ListGroup className="footer__quick-links">
                {/* Contact section */}
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0">.............</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-mail-line"></i>
                    </span>
                    Email:
                  </h6>
                  <p className="mb-0">.......@.....com</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-phone-fill"></i>
                    </span>
                    Phone:
                  </h6>
                  <p className="mb-0">+91..........</p>
                </ListGroupItem>
              </ListGroup>
            </div>

            <div className="flex-grow-1">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup className="footer__quick-links">
                {/* Quick Links section */}
                {quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>

            <div className="flex-grow-1">
              <h5 className="footer__link-title">Discover</h5>
              <ListGroup className="footer__quick-links">
                {/* Discover section */}
                {quick__links.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
