import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export const BlogList = ({ blogs, loading }) => {
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <Row>
      {blogs.map((blog, index) => {
        return (
          <Col className="column" sm={6} lg={4} key={index}>
            <div className="holder">
              <Card>
                <Card.Img variant="top" src={blog.urlToImage} />
                <Card.Body>
                  <div>{blog.author}</div>
                  <Card.Title>
                    <a href={blog.url}>{blog.title}</a>
                  </Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                </Card.Body>
              </Card>
              <a href={blog.url} className="btn btn-primary">
                Read More <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
