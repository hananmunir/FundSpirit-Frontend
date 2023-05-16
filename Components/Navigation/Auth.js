import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { login as reduxLogin } from "../../Redux/User";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../Api/User";
import { toast } from "react-toastify";
const userData = { name: "", email: "", password: "", confirmPassword: "" };

function Auth({ show, setShow }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState(userData);
  const [login, setLogin] = useState(true);

  const handleClose = () => {
    setUser(userData);
    setShow(false);
  };
  const handleLogin = () => {
    //trimming the user object
    const reqData = {
      email: user.email.trim(),
      password: user.password.trim(),
    };
    loginUser(reqData)
      .then((res) => {
        toast("Login Successful", { type: "success" });
        dispatch(reduxLogin(res.data));
        setShow(false);
        setUser(userData);

        window.location.href = "/user/1";
      })
      .catch((err) => {
        const message = err.response.data || "Something went wrong";
        toast(message, { type: "error" });
      });
  };

  const handleRegister = () => {
    if (user.password.trim() !== user.confirmPassword.trim()) {
      toast("Passwords do not match", { type: "error" });
      return;
    }

    //trimming the user object
    const reqData = {
      name: user.name.trim(),
      email: user.email.trim(),
      password: user.password.trim(),
    };

    registerUser(reqData)
      .then((res) => {
        toast("User Successfully Registered", { type: "success" });
        setShow(false);
        setUser(userData);
        setLogin(true);
      })
      .catch((err) => {
        toast(
          err?.response?.data || "Something went wrong, please try again later",
          {
            type: "error",
          }
        );
      });
  };

  //function to change boolean var
  const handleLoginLink = () => {
    setLogin(false);
    setUser(userData);
  };
  const handleRegisterLink = () => {
    setLogin(true);
    setUser(userData);
  };

  const handleNPOLogin = () => {
    router.push("/npo/login");
  };

  const isLoginValid = () => {
    return user.email.length <= 0 || user.password.length <= 0;
  };
  const isRegisterValid = () => {
    return (
      user.name.trim().length <= 0 ||
      user.email.trim().length <= 0 ||
      user.password.trim().length <= 0 ||
      user.confirmPassword.trim().length <= 0
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
                placeholder='Enter Password'
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
              />
            </Form.Group>
            {!login && (
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter Password Again'
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                  value={user.confirmPassword}
                />
              </Form.Group>
            )}
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
