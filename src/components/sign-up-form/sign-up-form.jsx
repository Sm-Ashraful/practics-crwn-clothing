import React, { useState, useContext } from "react";
import {
  createUserAuthFromEmailAndPassword,
  createUserDataModelForm,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/context";

import { UserSignUpContainer } from "../sign-in-form/sign-in-form.style";

const defaultFormData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const { setCurrentUser } = useContext(UserContext);

  const { displayName, email, password, confirmPassword } = formData;

  const resetField = () => {
    setFormData(defaultFormData);
  };

  const handleClick = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your Password does not match");
      return;
    }
    try {
      const { user } = await createUserAuthFromEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);

      await createUserDataModelForm(user, { displayName });
      resetField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Can't crate user, User already in sign in");
        return;
      }
      console.log("User crating a error", error);
    }
  };

  return (
    <UserSignUpContainer>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleClick}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleClick}
        />

        <Button type="submit">Sing Up</Button>
      </form>
    </UserSignUpContainer>
  );
};

export default SignUpForm;
