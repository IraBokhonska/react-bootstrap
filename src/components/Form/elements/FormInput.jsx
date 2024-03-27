import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

// const inputs = [
//   {
//     id: 1,
//     name: "fullname",
//     type: "text",
//     placeholder: "Enter your full name",
//     errorMessage:
//       "Please enter your full name. This should include both your first name and last name, separated by a space.",
//     pattern: "^[A-Z][a-z]*\\s[A-Z][a-z]*$",
//     required: true,
//   },
//   {
//     id: 2,
//     name: "email",
//     type: "email",
//     placeholder: "Enter your email address",
//     errorMessage: "It should be a valid email address!",
//     required: true,
//   },
//   {
//     id: 3,
//     name: "phone",
//     type: "tel",
//     placeholder: "Enter your contact number",
//     errorMessage: "It should be a valid phone number!",
//     required: true,
//   },
// ];

export const FormInput = (props) => {
  const [focused, setFocused] = React.useState(false);

  const { onChange, id, errorMessage, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <Col md={4}>
      <Form.Control
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </Col>
  );
};
