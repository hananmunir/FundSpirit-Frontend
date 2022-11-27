import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";

//const user = { name: "", email: "", password: "" };

function Model({ show, setShow }) {
  const handleClose = () => setShow(false);
  //boolean var
  const [login, setLogin] = useState(true);
  //function to change boolean var
  const handleLogin = () => {
    setLogin(false);
  };
  const handleRegister = () => {
    setLogin(true);
  };
  //const [formData, setFormData] = useState(user); //states
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{login ? "Login" : "Register"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {login ? (
              ""
            ) : (
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Enter name' />
                <Form.Text className='text-muted'></Form.Text>
              </Form.Group>
            )}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={(e) => handleClose()}>
            Login
          </Button>
          <div className='span-text flex-direction-col'>
            <Row className='mt-1'>
              <Col>
                {login ? (
                  <span>
                    Don't have an account?{" "}
                    <span
                      onClick={() => handleLogin()}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      Register Here
                    </span>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <span
                      onClick={() => handleRegister()}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      Login Here
                    </span>
                  </span>
                )}
              </Col>
            </Row>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Model;
