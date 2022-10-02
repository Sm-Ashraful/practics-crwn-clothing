import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  singInWithGooglePopup,
  signAuthInWIthEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.style.scss";

const defaultFormData = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const { email, password } = formData;

  const signInWithGoogle = async () => {
    await singInWithGooglePopup();
  };

  const resetField = () => {
    setFormData(defaultFormData);
  };

  const handleClick = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signAuthInWIthEmailAndPassword(email, password);
      resetField();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Invalid Email");
          break;
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        default:
          console.log("User login failed ", error);
      }
    }
  };

  return (
    <div className="user-sign-up">
      <h2>Already have an account</h2>
      <span>Sign In</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleClick}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleClick}
        />
        <div className="sign-in-button-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
