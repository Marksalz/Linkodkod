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
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [errorMessage, successMessage]);
  return (
    <div className="login_register_container">
      <div className="login_form_btn">
        <button onClick={() => setisLogin(true)}>Login</button>
        <button onClick={() => setisLogin(false)}>Register</button>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
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

      {/* {showLoginForm ? (
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
          showLogin={showLoginForm}
          onClick={async (formData) => {
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

              const data = await res.json();
              console.log(data);

              if (res.ok) {
                navigate("/home");
              }
            } catch (error: any) {
              alert(error.message || "Login failed failed");
            }
          }}
        />
      ) : (
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
          showLogin={showLoginForm}
          onClick={}
        />
      )} */}
    </div>
  );
}
