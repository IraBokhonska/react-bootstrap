import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import imgAbout from "../assets/images/about.jpg";

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
          <Col sm={6} className="image">
            <Image src={imgAbout} alt="about-img" />
          </Col>
          <Col sm={6} className="about-content">
            <p>
              Our company specializing in website creation. With a keen eye for
              design, proficiency in cutting-edge technologies, and a deep
              understanding of user experience, Corporate transform concepts
              into captivating digital realities.
            </p>
            <p>
              We serve as partners in bringing brands to life online, providing
              tailored solutions that not only showcase products or services but
              also engage and delight visitors. Our company works from small
              businesses to global enterprises, tailoring individualized
              solutions to meet the unique needs of each client.
            </p>
            <ul className="progress-list">
              <li className="progress-block">
                <h4>HTML / CSS / Javascript</h4>
                <ProgressBar now={html} label={`${html}%`} />
              </li>
              <li className="progress-block">
                <h4>responsive</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
              </li>
              <li className="progress-block">
                <h4>Photoshop</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
