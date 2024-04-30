import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import { Link } from "react-router-dom";

function CompNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="logo" src="avator.png" className="avator" />
          Paul-US-English
        </Navbar.Brand>
        <Nav className="navbar">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/courses"}>
            Courses
          </Nav.Link>
          <Nav.Link as={Link} to={"/lessons"}>
            Lessons
          </Nav.Link>
        </Nav>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default CompNavbar;
