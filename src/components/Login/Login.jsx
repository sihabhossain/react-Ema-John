import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Login</h2>

        <form>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
