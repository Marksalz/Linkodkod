import { useState } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";
export default function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="login_register_container">
      <div className="login_form_btn">
        <button onClick={() => setShowLoginForm(true)}>Login</button>
        <button onClick={() => setShowLoginForm(false)}>Register</button>
      </div>

      {showLoginForm ? (
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
            const res = await fetch(`http://localhost:3040/api/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
              console.log(res.headers);

              alert(`Welcome back! User info: ${JSON.stringify(data.user)}`);
              navigate("/menu");
            } else {
              alert(data.error || "Login failed failed");
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
          onClick={async (formData) => {
            const res = await fetch(`http://localhost:3040/api/auth/signup`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
              alert("Registration successful!");

              // const newUser = {
              //   id: data.id,
              //   username: data.username,
              //   role: data.role,
              //   lowestTime: data.lowestTime,
              // };
              navigate("/menu");
            } else {
              alert(data.error || "Registration failed");
            }
          }}
        />
      )}
    </div>
  );
}
