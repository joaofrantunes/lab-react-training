import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignupPage.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  const isValidEmail = email.includes("@");
  const isStrongPassword = password.length >= 6;

  const getGreeting = () => {
    switch (nationality) {
      case "de":
        return "Hallo";
      case "fr":
        return "Bonjour";
      default:
        return "Hello";
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isValidEmail ? "is-valid" : "is-invalid"}
          />
          {isValidEmail ? (
            <small className="text-success">You typed a valid email</small>
          ) : (
            <small className="text-danger">Invalid email</small>
          )}
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={isStrongPassword ? "is-valid" : "is-invalid"}
          />
          {isStrongPassword ? (
            <small className="text-success">Strong password</small>
          ) : (
            <small className="text-danger">Your password is too weak</small>
          )}
        </FormGroup>

        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input
            type="select"
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </Input>
        </FormGroup>

        <Button color="primary">Sign up</Button>
      </Form>

      <div className="mt-4">
        <h4>{getGreeting()}</h4>
        <p>Your email address is: {email}</p>
        <p>Your email address is {isValidEmail ? "correct" : "incorrect"}</p>
      </div>
    </div>
  );
};

export default SignupPage;
