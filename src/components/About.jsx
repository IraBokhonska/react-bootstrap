import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import imgAbout from "../assets/images/img1.jpg";

export const About = () => {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <div className="title-holder">
        <h2>About us</h2>
        <div className="subtitle">learn more about us</div>
      </div>
      <Container>
        <Row>
          <Col sm={6}>
            <Image src={imgAbout} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi voluptas delectus ducimus a, quam nisi magnam accusamus
              exercitationem perspiciatis, aspernatur animi eius molestias
              obcaecati unde vel cumque molestiae perferendis non.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              reprehenderit assumenda illum esse recusandae a temporibus
              deleniti laborum officia magni. Neque, minus accusantium.
              Reprehenderit libero corporis, ab placeat itaque repellendus.
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
