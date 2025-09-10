import "../styles/loginForm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const [isLogin, setisLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = async (formData: any) => {
    try {
      const res = await fetch(`http://localhost:3040/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (res.status === 401) {
        throw new Error(await res.text());
      }

      //const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Welcome back!!");
        navigate("/home");
      }
    } catch (error: any) {
      console.log(error);

      setErrorMessage(error.message || "Login failed failed");
    }
  };

  const handleRegisterClick = async (formData: any) => {
    try {
      const res = await fetch(`http://localhost:3040/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      //const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Registration successful!");
        navigate("/home");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "Registration failed");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [errorMessage, successMessage]);

  return (
    <div className="login_register_container">
      <div className="login_form_btn">
        <button
          className="login_btn"
          id={isLogin ? "selected_btn" : "none"}
          onClick={() => setisLogin(true)}
        >
          Login
        </button>
        <button
          className="register_btn"
          id={!isLogin ? "selected_btn" : "none"}
          onClick={() => setisLogin(false)}
        >
          Register
        </button>
      </div>
      {errorMessage && (
        <p style={{ color: "red", fontWeight: 700 }}>{errorMessage}</p>
      )}
      {successMessage && (
        <p style={{ color: "green", fontWeight: 700 }}>{successMessage}</p>
      )}
      <LoginForm
        formFields={[
          {
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Username",
          },
          {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password",
          },
        ]}
        showLogin={isLogin}
        onClick={isLogin ? handleLoginClick : handleRegisterClick}
      />
    </div>
  );
}
