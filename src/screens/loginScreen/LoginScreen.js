import React, { useEffect } from "react";
import "./_loginScreen.scss";
import { login } from "../../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
          alt=""
        />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project is made using youtue data api</p>
      </div>
    </div>
  );
};

export default LoginScreen;
