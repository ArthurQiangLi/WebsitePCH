import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function CompNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="logo" src="avator.png" className="avator" />
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CompNavbar;
