import React, { useContext, useState } from "react";
import "../styles/login.css";
import loginImg from "../assets/images/login.png";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Reset = () => {
  const { token } = useParams(); // Get the token from the URL
  const [newPassword, setNewPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "RESET_PASSWORD_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/reset-password/${token}`, {
        // Include the token in the URL
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }), // Send the token and new password in the request body
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: result.data });
      navigate("/reset-password-message");
    } catch (err) {
      dispatch({ type: "RESET_PASSWORD_FAILURE", payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <h2>Reset Password</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Reset Password
                  </Button>
                </Form>
                <p>
                  Remembered your password? <Link to="/login">Login</Link>
                </p>
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reset;
