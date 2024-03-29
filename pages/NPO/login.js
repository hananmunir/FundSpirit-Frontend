import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button } from "react-bootstrap";
import { npoLogin } from "../../Api/NPOs";
import { toast } from "react-toastify";
import { loginNPO } from "../../Redux/User";
import { useDispatch } from "react-redux";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLogin = () => {
    npoLogin(loginData)
      .then((res) => {
        dispatch(loginNPO(res.data));
        toast("Login Successful", { type: "success" });

        router.push("/account");
      })
      .catch((err) => {
        toast(
          err?.response?.data || "Something went wrong, please try again later",
          { type: "error" }
        );
      });
  };

  const isFormValid =
    loginData.email.trim() !== "" && loginData.password.trim() !== "";

  return (
    <Container
      style={{
        height: "100vh",
      }}
      className=' d-flex flex-column justify-content-center align-items-center '
    >
      <h1 className='mb-5'>Welcome! Login here</h1>{" "}
      <Form
        style={{
          width: "30vw",
        }}
        className='d-flex flex-column'
      >
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            value={loginData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mt-2'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={loginData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          className='mt-3 w-25 '
          variant='primary'
          disabled={!isFormValid}
          style={{
            justifySelf: "flex-end",
            alignSelf: "flex-end",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Form>
      <span className='mt-4'>
        Don't Have an Account?{" "}
        <span
          className='align-self-end'
          style={{ color: "#1d1cef", cursor: "pointer" }}
          onClick={() => router.push("/npo/auth")}
        >
          Register Here
        </span>
      </span>
    </Container>
  );
};

export default Login;
