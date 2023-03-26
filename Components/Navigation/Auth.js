import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import userStore, { login as reduxLogin } from "../../Redux/User";
import { loginUser, registerUser } from "../../Api/User";
const userData = { name: "", email: "", password: "" };

function Auth({ show, setShow }) {
  const router = useRouter();
  const handleClose = () => setShow(false);
  const [user, setUser] = useState(userData);
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    loginUser(user)
      .then((res) => {
        console.log(res.data);
        userStore.dispatch(reduxLogin(res.data));
        router.push("/user/1");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Here");
    setShow(false);
  };

  const handleRegister = () => {
    registerUser(user)
      .then((res) => {
        console.log("User Successfully Registered");
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(false);
  };

  //function to change boolean var
  const handleLoginLink = () => {
    setLogin(false);
  };
  const handleRegisterLink = () => {
    setLogin(true);
  };

  const isLoginValid = () => {
    return user.email === "" || user.password === "";
  };
  const isRegisterValid = () => {
    return user.name === "" || user.email === "" || user.password === "";
  };
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
                <Form.Control
                  type='name'
                  placeholder='Enter name'
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  value={user.name}
                />
                <Form.Text className='text-muted'></Form.Text>
              </Form.Group>
            )}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <div className=' d-flex flex-column align-items-center p-4 pt-2'>
          <Button
            variant='primary'
            onClick={login ? handleLogin : handleRegister}
            className='w-25 align-self-end mb-3'
            disabled={login ? isLoginValid() : isRegisterValid()}
          >
            {login ? "Login" : "Register"}
          </Button>
          <div className='span-text flex-column'>
            <Row className='mt-1'>
              <Col>
                {login ? (
                  <span>
                    Don't have an account?{" "}
                    <span
                      onClick={() => handleLoginLink()}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      Register Here
                    </span>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <span
                      onClick={() => handleRegisterLink()}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      Login Here
                    </span>
                  </span>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Auth;
