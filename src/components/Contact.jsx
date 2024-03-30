import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import ContactForm from "./Form/ContactForm";
import { Map } from "./Map";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 51.5043,
  lng: -0.0904,
};

export const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <ContactForm />
      </Container>
      {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading...</h2>}
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
