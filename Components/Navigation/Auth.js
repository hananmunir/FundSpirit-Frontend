import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import userStore, { login as reduxLogin } from "../../Redux/User";
import { loginUser, registerUser } from "../../Api/User";
import { toast } from "react-toastify";
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
        toast("Login Successful", { type: "success" });
        userStore.dispatch(reduxLogin(res.data));
        router.push("/user/1");
        setShow(false);
      })
      .catch((err) => {
        toast("Login Failed", { type: "error" });
        console.log(err);
      });
    console.log("Here");
  };

  const handleRegister = () => {
    registerUser(user)
      .then((res) => {
        console.log("User Successfully Registered");
        toast("User Successfully Registered", { type: "success" });
        setShow(false);
      })
      .catch((err) => {
        toast("User Registration Failed", { type: "error" });
        console.log(err);
      });
  };

  //function to change boolean var
  const handleLoginLink = () => {
    setLogin(false);
  };
  const handleRegisterLink = () => {
    setLogin(true);
  };

  const handleNPOLogin = () => {
    router.push("/npo/login");
  };

  const isLoginValid = () => {
    return user.email.trim() === "" || user.password.trim() === "";
  };
  const isRegisterValid = () => {
    return (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === ""
    );
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
                  onChange={(e) =>
                    setUser({ ...user, name: e.target.value.trim() })
                  }
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
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value.trim() })
                }
                value={user.email}
              />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value.trim() })
                }
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
              <Col className='d-flex flex-column align-items-center'>
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
                <span>
                  NPO Login
                  <span
                    onClick={() => handleNPOLogin()}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    {" "}
                    Here
                  </span>
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Auth;
