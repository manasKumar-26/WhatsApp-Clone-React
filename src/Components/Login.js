import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const loggedInUser = {
          name: result.user.displayName,
          email: result.user.email,
          dp: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        props.HandleLoggedInUser(loggedInUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="login">
        <div className="login_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png"
            alt="Logo"
          />
          <div className="login_text">
            <h1>Sign in to WhatsApp</h1>
          </div>
          <Button type="submit" onClick={signIn}>
            Sign In With Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
