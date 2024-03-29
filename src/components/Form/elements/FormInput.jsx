import React from "react";
import { Col, Form } from "react-bootstrap";
import { useFormInputContext } from "../FormInputContext";

const FormInput = ({ name, placeholder, rules, type }) => {
  const { register, errors } = useFormInputContext();

  return (
    <Col sm={12}>
      <Form.Control
        {...register(name, rules)}
        type={type || "text"}
        placeholder={placeholder}
        className="form-input"
      />
      <div className="form-error">
        {errors[name] && <p>{errors[name].message || "Error!"}</p>}
      </div>
    </Col>
  );
};

export default FormInput;
