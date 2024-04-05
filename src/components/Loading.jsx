import React from "react";
import Spinner from "react-bootstrap/Spinner";

export const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};
