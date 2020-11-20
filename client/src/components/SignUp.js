import React, { useState } from "react";
import { Button, Form, Radio } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
//import { signApi } from "../api/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [redirectRoute, setRedirectRoute] = useState("");

  const handleChange = event => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  //   const loginSubmit = () => {
  //     signApi(email, password)
  //       .then(data => {
  //         const token = data.token;
  //         localStorage.setItem("token", token);
  //         localStorage.setItem("user", JSON.stringify(data.user));
  //         if (data.user && data.user.role === "applicant") {
  //           setRedirectRoute("/applicant_create_profile");
  //         } else if (data.user && data.user.role === "recruiter") {
  //           setRedirectRoute("/public-applicant-profiles");
  //         }
  //       })
  //       .catch(() => {
  //         setError(true);
  //         setRedirectRoute("");
  //       });
  //   };

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
      <Radio label="I am an Applicant" />
      <Radio label="I am a Recruiter" />
      <Button>Sign Up</Button>

      {/* {redirectRoute && <Redirect to={redirectRoute} />} */}
    </Form>
  );
};

export default SignUp;