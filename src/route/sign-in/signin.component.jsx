import React from "react";
import {
  singInWithGooglePopup,
  createUserDataModelForm,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();

    await createUserDataModelForm(user);
  };
  return (
    <div>
      <p>This is sign in page</p>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
