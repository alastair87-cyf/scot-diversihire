import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { signApi } from "../api/auth";

const ApplicantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = event => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const loginSubmit = () => {
    signApi(email, password)
      .then(data => {
        const token = data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setSuccess(true);
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Field>
      <Button primary onClick={loginSubmit} type="submit">
        Login
      </Button>
      {error ? <div>Incorrect email or password</div> : null}
      {success ? <Redirect to="/applicant_create_profile" /> : null}
    </Form>
  );
};

export default ApplicantLogin;
