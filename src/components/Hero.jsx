import React from "react";
import Carousel from "react-bootstrap/Carousel";

import imgHero1 from "../assets/images/img-hero1.jpg";
import imgHero2 from "../assets/images/img-hero2.jpg";
import imgHero3 from "../assets/images/img-hero3.jpg";

const heroData = [
  {
    id: 1,
    image: imgHero1,
    title: "The perfect design for your website",
    description:
      "crafting the perfect design for your website involves a delicate balance of aesthetics and functionality. From intuitive navigation to visually stunning layouts, the perfect design harmonizes form and function to leave a lasting impression. By understanding your audience's needs and aspirations, and infusing your brand's essence into every pixel, you can create a website drives meaningful engagement and results.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: imgHero2,
    title: "Start Your Future Financial Plan",
    description:
      "Embarking on your future financial plan is akin to laying the groundwork for a journey towards financial security and freedom. It's a proactive step towards shaping the life you envision, ensuring stability, and achieving your long-term goals. By starting your financial plan today, you empower yourself to make informed decisions, cultivate smart saving and investing habits, and navigate potential challenges with confidence.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: imgHero3,
    title: "Enjoy the Difference",
    description:
      "encapsulates the beauty of diversity and the richness it brings to our lives. Embracing differences in perspectives, cultures, and experiences fosters understanding, creativity, and growth. By embracing and appreciating differences, we unlock opportunities for connection, empathy, and collective progress.",
    link: "https://www.twitter.com",
  },
];

export const Hero = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                src={hero.image}
                className="d-block w-100"
                alt={"Slide" + hero.id}
              />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a href={hero.link} className="btn btn-primary">
                  Learn more <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};
