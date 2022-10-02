import React, { Fragment } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/083 crown.svg";

import { UserContext } from "../../context/context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const userSignOut = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={userSignOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
