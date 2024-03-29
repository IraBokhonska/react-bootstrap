import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Form, Button } from "react-bootstrap";

import ModalStandart from "../Modal";
import FormInput from "./elements/FormInput";
import { FormInputContextProvider } from "./FormInputContext";
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
    <FormInputContextProvider register={register} errors={errors}>
      <Form onSubmit={handleSubmit(onSubmit)} className="contact-form form">
        <Row>
          <FormInput
            name="fullName"
            placeholder="Enter your full name"
            rules={{
              required: "The field must be required!",
              minLength: { value: 5, message: "Min 5 symbols!" },
            }}
          />
          <FormInput
            name="phoneNumber"
            placeholder="Enter your phone number"
            rules={{
              required: "The field must be required!",
              pattern: {
                value: /(7|8|9)\d{9}/,
                message: "Enter the correct phone number!",
              },
            }}
          />
          <FormInput
            name="email"
            placeholder="Enter your email"
            rules={{
              required: "The field must be required!",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Enter the correct email.",
              },
            }}
          />
          <FormInput
            name="text"
            placeholder="Leave your message"
            as="textarea"
            rules={{
              maxLength: { value: 500, message: "Max length 500 symbols" },
            }}
          />
        </Row>
        <div className="btn-holder">
          <Button disabled={!isValid} type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <ModalStandart show={showModal} setShow={setShowModal} />
    </FormInputContextProvider>
  );
}

export default ContactForm;
