import React from "react";

const Login = () => {
  return (
    <div class="container min-vw-100 max-vw-100 vw-100 vh-100 min-vh-100">
      <div class="row  w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="col  w-100 h-100 d-flex align-items-center justify-content-center">
          <form className="jumbotron">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ width: "600px" }}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                style={{ width: "600px" }}
              />

              <div id="emailHelp" class="form-text">
                Your password will be encrypted automatically
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-block w-100 mt-4"
              style={{ backgroundColor: "#12af39" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div class="col text-center">
          <h3> Haven't got an account yet? </h3>
          <p> Click on the below button to register! </p>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ backgroundColor: "#12af39" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
