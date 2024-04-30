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
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={
              "https://englishwithlucy.teachable.com/courses/?_gl=1*1c10mob*_ga*NzI1OTAyODUxLjE3MTQ0Mjk4Mzg.*_ga_WX2PF7BRC0*MTcxNDUwODQxNy4yLjEuMTcxNDUxMDg1MC4wLjAuMjA2NjkzNDMwOA..*_fplc*THIxRCUyRlIzRzlJT1RDVnRkJTJGU0liSElwJTJGTWp1WmF5VGpvRHJhNE15WExZSzN5YnIyJTJCSnZ4aVIxZnRQYnhjZllwZlNwaEhBWGVPUFd0UVlUQUg3RjE3djhGNkwlMkJ5RXFERkZkYXBpJTJCYW1PZEJVVjNmdUZGcWN2bndsWHNOT3F3JTNEJTNE"
            }>
            Courses
          </Nav.Link>
          <Nav.Link as={Link} to={"/lessons"}>
            Lessons
          </Nav.Link>{" "}
          <Nav.Link as={Link} to={"/postboard"}>
            Postboard
          </Nav.Link>{" "}
          <Nav.Link as={Link} to={"/aboutme"}>
            AboutMe
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
