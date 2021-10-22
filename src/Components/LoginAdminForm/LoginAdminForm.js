import React, { useState} from "react";

import "./LoginAdminForm.css";

const LoginAdminForm = (props) => {
 

  /* email holder*/
  const [email, setEmail] = useState("");

  /* password holder */
  const [password, setPasword] = useState("");

  /* input email handler function*/
  const inputEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  /* input password handler function*/
  const inputPasswordHandler = (event) => {
    setPasword(event.target.value);
  };

  /* submit handler*/
  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    props.onAuth(loginData);

    // props.loginHandler();
    /* two-ways binding */
    setEmail("");
    setPasword("");
  };
 

  return (
    <form onSubmit={submitHandler} className="login-form">
      <h3>Admin Login</h3>
      <div className="login-form__input">
        <input
          onChange={inputEmailHandler}
          type="email"
          value={email}
          placeholder="example@email.com"
        />
      </div>

      <div className="login-form__input">
        <input
          onChange={inputPasswordHandler}
          type="password"
          value={password}
          placeholder="password..."
        />
      </div>

      <div className="login-form__action">
        <button>Sign In</button>
      </div>
    </form>
  );
};

export default LoginAdminForm;
