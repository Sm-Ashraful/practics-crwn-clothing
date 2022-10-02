import React from "react";
// import { useEffect } from "react";

// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

const Authentication = () => {
  //   useEffect(() => {
  //     myfunction();
  //   }, []);

  // const myfunction = async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDataModelForm(response.user);
  //   }
  // };

  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
