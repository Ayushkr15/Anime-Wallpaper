import React from "react";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md="8" className="mx-auto">
            <div className="abt animated-hover">
              <h1 className="text-center mb-4">About Us</h1>
              <p className="lead text-center mb-5">
                Welcome to our anime wallpaper website! We are a team of anime
                enthusiasts who love to share our favorite anime wallpapers with
                the world.
              </p>
              <Row>
                <Col md="6">
                  <p>
                    We offer a wide variety of high-quality anime wallpapers,
                    including popular series like Naruto, Attack on Titan, and
                    My Hero Academia, as well as lesser-known gems that we
                    believe deserve more attention.
                  </p>
                </Col>
                <Col md="6">
                  <p>
                    We are constantly updating our collection with new
                    wallpapers, so be sure to check back often to discover new
                    anime favorites and fresh wallpaper designs.
                  </p>
                </Col>
              </Row>
              <p className="text-center mt-5">
                If you have any questions, comments, or suggestions for our
                website, please don't hesitate to{" "}
                <a href="/contact">contact us</a>. We would love to hear from
                you!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
