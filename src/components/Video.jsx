import React from "react";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import imgVideo from "../assets/videos/corporate.mp4";

export const Video = () => {
  return (
    <section id="video" className="block video-block">
      <div className="title-holder">
        <h2>We are Corporate</h2>
        <div className="subtitle">learn more about us</div>
      </div>
      <Container>
        <Row>
          <video src={imgVideo} autoPlay loop muted className="video" />
          <a href="https://www.google.com" className="btn btn-primary">
            Learn more <i className="fas fa-chevron-right"></i>
          </a>
        </Row>
      </Container>
    </section>
  );
};
