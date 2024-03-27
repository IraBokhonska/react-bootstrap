import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import React from "react";

// export const ContactForm = () => {
//   return (
//     <Form className="contact-form">
//       <Row>
//         <Col md={4}>
//           <Form.Control
//             type="text"
//             placeholder="Enter your full name"
//             required
//           />
//         </Col>
//         <Col md={4}>
//           <Form.Control
//             type="email"
//             placeholder="Enter your email address"
//             required
//           />
//         </Col>
//         <Col md={4}>
//           <Form.Control
//             type="tel"
//             placeholder="Enter your contact number"
//             required
//           />
//         </Col>
//       </Row>
//       <Row>
//         <Col sm={12}>
//           <Form.Control as="textarea" placeholder="Enter your message" />
//         </Col>
//       </Row>
//       <div className="btn-holder">
//         <Button type="submit">Submit</Button>
//       </div>
//     </Form>
//   );
// };

import { useForm } from "react-hook-form";
import { useState } from "react";

import ModalStandart from "../Modal";

import "../../styles/general.scss";

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
    setShowModal(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="contact-form form">
        <Row>
          <Col sm={12}>
            <Form.Control
              {...register("fullName", {
                required: "The field must be required!",
                minLength: {
                  value: 5,
                  message: "Min 5 symbols!",
                },
              })}
              placeholder="Enter your full name"
              className="form-input"
            />
            <div className="form-error">
              {errors?.fullName && (
                <p>{errors?.fullName?.message || "Error!"}</p>
              )}
            </div>
          </Col>
          <Col sm={12}>
            <Form.Control
              {...register("phoneNumber", {
                required: "The field must be required!",
                pattern: {
                  value: /(7|8|9)\d{9}/,
                  message: "Enter the correct phone number!",
                },
              })}
              placeholder="Enter your phone number"
              className="form-input"
            />
            <div className="form-error">
              {errors?.phoneNumber && (
                <p>{errors?.phoneNumber?.message || "Error!"}</p>
              )}
            </div>
          </Col>
          <Col sm={12}>
            <Form.Control
              {...register("email", {
                required: "The field must be required!",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Enter the correct email.",
                },
              })}
              placeholder="Enter your email"
              className="form-input"
            />
            <div className="form-error">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
          </Col>
          <Col sm={12}>
            <Form.Control
              as="textarea"
              {...register("text", {
                maxLength: {
                  value: 500,
                  message: "Max lenght 500 symbols",
                },
              })}
              placeholder="Leave your message"
              className="form-text-area form-input"
            />
            <div className="form-error">
              {errors?.text && <p>{errors?.text?.message || "Error!"}</p>}
            </div>
          </Col>
        </Row>
        <div className="btn-holder">
          <Button disabled={!isValid} type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <ModalStandart show={showModal} setShow={setShowModal} />
    </>
  );
}
export default ContactForm;
