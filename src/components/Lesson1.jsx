import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "lesson-content", title: "Lesson Content" },
  { id: "conclusion", title: "Conclusion" },
];

function Lesson1() {
  const [activeSection, setActiveSection] = useState("introduction");

  const handleSelect = (selectedKey) => {
    document.getElementById(selectedKey).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(selectedKey);
  };

  return (
    <Container fluid>
      <Row>
        <Col
          md={3}
          className="position-fixed"
          style={{ maxHeight: "100vh", overflowY: "auto" }}>
          <Nav
            variant="pills"
            className="flex-column"
            activeKey={activeSection}
            onSelect={handleSelect}>
            {sections.map((section) => (
              <Nav.Item key={section.id}>
                <Nav.Link eventKey={section.id}>{section.title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col md={{ span: 8, offset: 4 }}>
          <div id="introduction" style={{ height: "100vh" }}>
            <h2>Introduction</h2>
            <p>This is the introduction section of the lesson.</p>
          </div>
          <div id="lesson-content" style={{ height: "100vh" }}>
            <h2>Lesson Content</h2>
            <p>This is the detailed part of the lesson content.</p>
          </div>
          <div id="conclusion" style={{ height: "100vh" }}>
            <h2>Conclusion</h2>
            <p>This is the conclusion of the lesson.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Lesson1;
