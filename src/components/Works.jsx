import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import portfolio1 from "../assets/images/portfolio1.jpg";
import portfolio2 from "../assets/images/portfolio2.jpg";
import portfolio3 from "../assets/images/portfolio3.jpg";
import portfolio4 from "../assets/images/portfolio4.jpg";
import portfolio5 from "../assets/images/portfolio5.jpg";
import portfolio6 from "../assets/images/portfolio6.jpg";
import portfolio7 from "../assets/images/portfolio7.jpg";
import portfolio8 from "../assets/images/portfolio8.jpg";
import portfolio9 from "../assets/images/portfolio9.jpg";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: portfolio1,
    title: "Finance",
    subtitle: "Web Design",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: portfolio2,
    title: "Lonely Path",
    subtitle: "Photography",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: portfolio3,
    title: "Corporate brands",
    subtitle: "Branding",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: portfolio4,
    title: "The Difference",
    subtitle: "Web Design",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: portfolio5,
    title: "Nature Patterns",
    subtitle: "Branding",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: portfolio6,
    title: "The Difference",
    subtitle: "Photography",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: portfolio7,
    title: "Winter Sonata",
    subtitle: "Web Design",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: portfolio8,
    title: "Lonely Path",
    subtitle: "Branding",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: portfolio9,
    title: "Appreciation",
    subtitle: "Photography",
  },
];

export const Works = () => {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className="portfoliolist">
          {worksData.map((work) => {
            return (
              <Col key={work.id} lg={4} sm={6} className="portfolio">
                <div className="portfolio-wrapper">
                  <a href={work.link}>
                    <Image
                      src={work.image}
                      alt="portfolio-image"
                      className="image"
                    />
                    <div className="label text-center">
                      <h3>{work.title}</h3>
                      <p>{work.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
