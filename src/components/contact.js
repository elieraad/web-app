import React from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Toast } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [toastMessage, setToastMessage] = useState("");
  const [bg, setBg] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [name, setName] = useState(""),
    onNameInput = ({ target: { value } }) => setName(value);

  const [email, setEmail] = useState(""),
    onEmailInput = ({ target: { value } }) => setEmail(value);

  const [subject, setSubject] = useState(""),
    onSubjectInput = ({ target: { value } }) => setSubject(value);

  const [message, setMessage] = useState(""),
    onMessageInput = ({ target: { value } }) => setMessage(value);

  const handleSubmit = (event) => {
    event.preventDefault();

    var templateParams = {
      name,
      email,
      subject,
      message,
    };

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    emailjs
      .send(
        "service_j8jqgeh",
        "template_t1cf9md",
        templateParams,
        "MgcX3FIwAK5Guq8BG"
      )
      .then(
        (result) => {
          setToastMessage("Email sent successfully!");
          setBg("success");
          setShowToast(true);
        },
        (error) => {
          setToastMessage("Failed to send email. Please try again later.");
          setBg("danger");
          setShowToast(true);
        }
      );
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <h1 className="display-5 fw-bold">Contact Axiom</h1>
            <p>
              Axiom team of experts will be more than happy to get in touch and
              answer all of your questions.
            </p>
            <div className="contact-info">
              <p>
                <i
                  className="bi bi-geo-alt-fill"
                  style={{ color: "dodgerblue" }}
                ></i>{" "}
                Beirut, Lebanon
              </p>
              <p>
                <i
                  className="bi bi-envelope-fill"
                  style={{ color: "dodgerblue" }}
                ></i>{" "}
                info@axiomtech.me
              </p>
            </div>
            <div className="d-flex my-4">
              <p className="mb-0 me-2 align-self-center">Find us here:</p>
              <a
                href="https://www.linkedin.com/company/axiomtech-me"
                target="_blank"
              >
                <i
                  className="bi bi-linkedin h2 ms-2 align-self-center"
                  style={{ color: "dodgerblue" }}
                ></i>
              </a>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <Form id="contact-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={onNameInput}
                  value={name}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={onEmailInput}
                  value={email}
                  required
                />
                <Form.Text>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  onChange={onSubjectInput}
                  value={subject}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={onMessageInput}
                  value={message}
                  rows={5}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mb-3">
                Submit
              </Button>

              <Toast
                bg={bg}
                show={showToast}
                onClose={() => setShowToast(false)}
                delay={3000}
                autohide
                position={"bottom-end"}
              >
                <Toast.Body>{toastMessage}</Toast.Body>
              </Toast>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
