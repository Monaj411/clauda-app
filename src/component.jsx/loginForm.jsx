import React, { Component } from "react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("submitted");
  };

  return (
    <React.Fragment>
      <div class="container fontBody welcome text-white">
        <h1 id="title" className="p-3 text-center heading">
          Welcome to Clauda{" "}
        </h1>
        <p id="description" class="description text-center">
          Log in with your Clauda account to continue
        </p>

        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="username" htmlFor="username">
              Username
            </label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              autoFocus
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn button">
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
