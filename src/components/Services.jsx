import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Responsive Design",
    description:
      "We ensure that websites and applications adapt seamlessly to different screen sizes and devices, providing users with an optimal viewing experience across platforms.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Creative Design",
    description:
      "Our company blends aesthetic appeal with strategic thinking to craft compelling designs that leave a lasting impression.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "SEO Optimized",
    description:
      "SEO (search engine optimization) is an improving a website’s visibility in search engines, like Google. SEO is about fulfilling users’ search needs by creating relevant, high-quality content and providing the best possible user experience.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Retina Ready",
    description:
      "Retina-ready designs are optimized to display with exceptional clarity and sharpness on high-resolution screens, ensuring that graphics and text appear crisp and vivid. ",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Brower Compatibility",
    description:
      "Browser compatibility ensures that websites or applications function consistently across different web browsers, such as Chrome, Firefox, Safari, and Edge, regardless of their underlying technologies or rendering engines.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Customer Support",
    description:
      "We approach our clients with understanding and provide services that help them make the profitable and correct use of the product. This includes assistance in planning, installation, troubleshooting, maintenance, and website modernization.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="block services-block">
      <Container>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row className="container">
          {servicesData.map((services) => {
            return (
              <Col key={services.id} md={4} sm={6} className="holder">
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
