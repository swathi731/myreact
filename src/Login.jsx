import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let Logincheck = () => {
    if (username.current.value === "sarasu" && password.current.value === "sarasu@123") {
      dispatch(login(username.current.value));
      navigate("/home");
    } else {
      alert("Your credentials are wrong. Please check once!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <h1 className="text-center mb-4">Login Page</h1>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input type="text" ref={username} className="form-control" placeholder="Enter your username" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" ref={password} className="form-control" placeholder="Enter your password" />
        </div>
        <button type="submit" onClick={Logincheck} className="btn btn-primary w-100">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;