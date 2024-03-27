import React from "react";
import Container from "react-bootstrap/Container";
import  ContactForm  from "./Form/ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <ContactForm />
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"
        ></iframe>
      </div>
      <Container fluid>
        <address className="contact-info">
          <ul>
            <li>
              <a href="mailto: corporate@service.com">
                <i className="fas fa-envelope"></i> corporate@service.com
              </a>
            </li>
            <li>
              <a href="tel: +001 356-868-2454">
                <i className="fas fa-phone"></i> +001 356-868-2454
              </a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              London, United Kingdom
            </li>
          </ul>
        </address>
      </Container>
    </section>
  );
};
