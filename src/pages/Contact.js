import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faBehance,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact-us">
      <Container>
        <Row>
          <Col xs={12} md={6} className="box">
            <p className="title">
              Feel free to reach out to us on any of our social media platforms
            </p>
            <div className="social-media">
              <div className="social-details">
                <a href="https://twitter.com/Ayushkr15_">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <span>@Ayushkr15_</span>
              </div>
              <div className="social-details">
                <a href="https://github.com/Ayushkr15">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <span>Ayushkr15</span>
              </div>
              <div className="social-details">
                <a href="https://www.linkedin.com/in/ayushkr13/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>{" "}
                <span> Ayush Kumar Sinha</span>
              </div>

              <div className="social-details">
                <a href="https://discord.com/">
                  <FontAwesomeIcon icon={faDiscord} />
                </a>{" "}
                <span> LazySenpai#3624</span>
              </div>
            </div>
          </Col>
          {/* <Col xs={12} md={6} className="box">
            <div className="social-media">
              <div className="social-details">
                <a href="https://twitter.com/HasChan123">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <span>@HasChan123</span>
              </div>
              <div className="social-details">
                <a href="https://www.behance.net/hasnaamahmoud0MK">
                  <FontAwesomeIcon icon={faBehance} />
                </a>
                <span>Hasnaa Mahmoud</span>
              </div>
              <div className="social-details">
                <a href="https://www.linkedin.com/in/hasnaa-mahmoud-5151b5244/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a><span> Hasnaa Mahmoud</span>
              </div>

              <div className="social-details">
                <a href="https://discord.com/">
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
                <span> Hasnaa#4644</span>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
