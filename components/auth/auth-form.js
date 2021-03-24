import { useState, useRef } from "react";
import classes from "./auth-form.module.css";
import { signIn } from "next-auth/client";

const createUser = async (email, password) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const emailInput = useRef();
  const passwordInput = useRef();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async (event) => {
    //Values of inputs
    const emailValue = emailInput.current.value;
    const passwordValue = passwordInput.current.value;

    //
    event.preventDefault();

    //
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: emailValue,
        password: passwordValue,
      });

      //console.log(result);
    } else {
      try {
        const result = await createUser(emailValue, passwordValue);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordInput} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
