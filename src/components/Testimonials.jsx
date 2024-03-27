import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "They took our feedback and were really able to bring what we were envisioning to life.",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "We will definitely work with them again for a website for our other brand.They were very good at reading between the lines and delivering what we wanted.",
    designation: "Marketing Manager",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "They took our feedback and were really able to bring what we were envisioning to life.",
    designation: "CEO",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="block testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">
                      {testimonials.designation}
                    </span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
};
